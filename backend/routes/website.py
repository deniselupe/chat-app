from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from typing import Annotated
from tortoise.exceptions import DoesNotExist
from utility.pydantic.models import UserWebInbound
from utility.database.models import UserDetails
from utility.auth.token import encode_token
from utility.encryption.password import hash_password, verify_password
from utility.config import get_settings, Settings

router = APIRouter(
    prefix="/web",
    tags=["Website Routes"],
)

@router.post("/create_user")
async def create_user(user_info: Annotated[UserWebInbound, None]):
    hashed_pw = await hash_password(user_info.password)

    db_outcome = await UserDetails.get_or_create(
        defaults={"password": hashed_pw},
        email=user_info.email,
    )
    if db_outcome[1] is True:
        return JSONResponse(content={"message": "user created"}, status_code=201)
    elif db_outcome[1] is False:
        return JSONResponse(content={"message": "user exist"}, status_code=200)


@router.post("/login_user")
async def login_user(
    user_info: Annotated[UserWebInbound, None],
    settings: Annotated[Settings, Depends(get_settings)],
):
    try:
        db_outcome = await UserDetails.get(email=user_info.email)
        verified_bool = await verify_password(db_outcome.password, user_info.password)
    except DoesNotExist:
        return JSONResponse(content={"message": "invalid credentials"}, status_code=200)

    if verified_bool is False:
        return JSONResponse(content={"message": "invalid credentials"}, status_code=200)
    elif verified_bool is True:
        token = await encode_token(
            db_outcome, settings.TOKEN_SECRET_LOCAL, settings.TOKEN_SECRETPHRASE
        )
        return JSONResponse(
            content={"message": "token provided"},
            headers={"x-auth-token": token},
            status_code=200,
        )
