import uvicorn
from tortoise.contrib.fastapi import register_tortoise
from typing import Annotated
from fastapi import FastAPI, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from routes import auth, discord, website
from utility.config import get_settings, Settings
from utility.utility import AuthUtil

app = FastAPI(root_path="/dev")

settings: Annotated[Settings, None] = get_settings()
register_tortoise(
    app,
    db_url=f"mysql://{settings.DB_USER}:{settings.DB_PW}@{settings.DOMAIN}:{settings.PORT}/{settings.DATABASE}",
    modules={"models": ["utility.database.models"]},
    generate_schemas=settings.GEN_SCHEMAS,
)

origins = [
    "http://localhost:3000",
]

app.include_router(auth.router)
app.include_router(discord.router)
app.include_router(website.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get(
    "/brew_coffee",
    status_code=418,
)
async def brew_coffee(
    x_real_ip: str = Header(None, alias="X-Real-IP"),
    x_forwarded_for: str = Header(None, alias="X-Forwarded-For"),
):
    return "I can't brew coffee because..."


@app.get(
    "/protected",
    dependencies=[Depends(AuthUtil.verify_token)],
)
async def protected_route():
    return 200


if __name__ == "__main__":
    uvicorn.run(
        # Core
        "main:app",
        # Host
        host="127.0.0.1",
        port=8000,
        # DEV Settings
        reload=settings.RELOAD,
    )
