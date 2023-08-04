from fastapi import APIRouter, Header, Depends
from fastapi.responses import JSONResponse
from typing import Annotated
from utility.utility import AuthUtil
from utility.config import get_settings, Settings

router = APIRouter(
    prefix="/auth",
    tags=["Authentication Routes"],
)


@router.post("/auth_token")
async def auth_token(
    x_auth_token: Annotated[str | None, Header()],
    settings: Annotated[Settings, Depends(get_settings)],
):
    payload = await AuthUtil.verify_token(
        x_auth_token, settings.TOKEN_SECRET_LOCAL, settings.TOKEN_SECRETPHRASE
    )
    if payload is True:
        return JSONResponse(content={"message": "valid"}, status_code=200)
    elif payload is False:
        return JSONResponse(content={"message": "invalid"}, status_code=401)
