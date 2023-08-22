from fastapi import APIRouter, HTTPException, Depends
from utility.utility import AuthUtil

router = APIRouter(
    prefix="/auth",
    tags=["Authentication Routes"],
)


@router.get("/auth_token", dependencies=[Depends(AuthUtil.verify_token)],)
async def auth_token():
    return HTTPException(status_code=200, detail="x-auth-token header valid.")