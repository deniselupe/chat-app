from fastapi import APIRouter

router = APIRouter(
    prefix="/dis",
    tags=["Discord Routes"],
)

@router.get("/default")
async def default():
    return {"message": "hello world"}