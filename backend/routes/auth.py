from fastapi import APIRouter, HTTPException, Depends
from utility.utility import AuthUtil, SSOUtil

router = APIRouter(
    prefix="/auth",
    tags=["Authentication Routes"],
)


@router.get("/auth_token", dependencies=[Depends(AuthUtil.verify_token)])
async def auth_token():
    return HTTPException(status_code=200, detail="x-auth-token header valid.")


@router.get("/signup/discord", dependencies=[Depends(SSOUtil.discord_request)])
async def discord_auth():

    return 200