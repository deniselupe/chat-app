import time
from typing import Annotated
from utility.pydantic.models import UserLogin
from fastapi import APIRouter, Body, Header, Response, Depends, HTTPException
from fastapi.responses import RedirectResponse
from utility.utility import AuthUtil, SSOUtil, DatabaseUtil

router = APIRouter(
    prefix="/auth",
    tags=["Authentication Routes"],
)


@router.get("/auth_token", dependencies=[Depends(AuthUtil.verify_token)])
async def auth_token():
    return HTTPException(status_code=200, detail="x-auth-token header valid.")


@router.get("/state")
async def get_state(
    provider: Annotated[str | None, None], intent: Annotated[str | None, None]
):
    url = await AuthUtil.build_auth_url(provider, intent)

    return RedirectResponse(url)


@router.get("/user/sso")
async def user_flow(
    code: Annotated[str | None, None],
    state: Annotated[str | None, None],
    referer: Annotated[str | None, Header()],
    response: Response,
):
    user_info, intent = await SSOUtil.SSO_validator(code, state, referer)
    db_val = await DatabaseUtil.check_user_exist(user_info)
    if intent == "signin":
        if db_val == "Object does not exist":
            return RedirectResponse(
                url="https://ptilol.com/signup",
            )
        else:
            response = RedirectResponse(url="https://ptilol.com/")
            response.set_cookie(
                key="token",
                value=await AuthUtil.encode_token(db_val),
                httponly=True,
                domain="ptilol.com",
                expires=time.strftime(
                    "%a, %d-%b-%Y %T GMT", time.gmtime(time.time() + 300)
                ),
            )
            return response
    if intent == "signup":
        if db_val == "Object does not exist":
            await DatabaseUtil.create_new_user(user_info)
        return RedirectResponse(url="https://ptilol.com/")

    return


@router.post("/user/credentials")
async def credentials_flow(
    form: Annotated[UserLogin | None, Body()] = None,
):
    return