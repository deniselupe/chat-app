import re
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from typing import Annotated
from tortoise.exceptions import DoesNotExist
from utility.pydantic.models import UserWebInbound
from utility.database.models import UserDetails
from utility.utility import AuthUtil, EncryptionUtil
from utility.config import get_settings, Settings
from datetime import datetime

router = APIRouter(
    prefix="/web",
    tags=["Website Routes"],
)


@router.post("/create_user")
async def create_user(user_info: Annotated[UserWebInbound, None]):
    if (
        re.match(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
            user_info.password.get_secret_value(),
        )
        is None
    ):
        return JSONResponse(content={"message": "invalid credentials"}, status_code=400)

    db_outcome = await UserDetails.get_or_create(
        defaults={
            "password": await EncryptionUtil.hash_password(
                user_info.password.get_secret_value()
            )
        },
        email=user_info.email,
    )
    if db_outcome[1] is True:
        return JSONResponse(content={"message": "user created"}, status_code=201)
    elif db_outcome[1] is False:
        return JSONResponse(content={"message": "user exist"}, status_code=400)


@router.post("/login_user")
async def login_user(
    user_info: Annotated[UserWebInbound, None],
    settings: Annotated[Settings, Depends(get_settings)],
):
    try:
        db_outcome = await UserDetails.get(email=user_info.email)
        verified_bool = await EncryptionUtil.verify_password(
            db_outcome.password, user_info.password.get_secret_value()
        )
        if verified_bool is False:
            return JSONResponse(
                content={"message": "invalid credentials"}, status_code=400
            )
        elif verified_bool is True:
            await db_outcome.update_from_dict({"last_login": datetime.now()}).save()
            token = await AuthUtil.encode_token(
                db_outcome, settings.TOKEN_SECRET_LOCAL, settings.TOKEN_SECRETPHRASE
            )
            return JSONResponse(
                content={"message": "token provided"},
                headers={"x-auth-token": token},
                status_code=200,
            )
    except DoesNotExist:
        return JSONResponse(content={"message": "invalid credentials"}, status_code=400)
