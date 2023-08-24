from fastapi import APIRouter, HTTPException, Depends
from fastapi.responses import JSONResponse
from utility.utility import AuthUtil, SSOUtil

router = APIRouter(
    prefix="/auth",
    tags=["Authentication Routes"],
)


@router.get("/auth_token", dependencies=[Depends(AuthUtil.verify_token)])
async def auth_token():
    return HTTPException(status_code=200, detail="x-auth-token header valid.")


@router.get("/signup/discord")
async def discord_auth(code: str):
    token = await SSOUtil.discord_request(code)
    return JSONResponse(
                content={"message": "token provided"},
                headers={"x-auth-token": token},
                status_code=200,
            )