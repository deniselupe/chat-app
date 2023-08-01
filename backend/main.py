import uvicorn
from tortoise.contrib.fastapi import register_tortoise
from typing import Annotated
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import auth, discord, website
from utility.config import get_settings, Settings

app = FastAPI(root_path="/api")

settings: Annotated[Settings, None] = get_settings()
register_tortoise(
    app,
    db_url=f"mysql://{settings.DB_USER}:{settings.DB_PW}@{settings.DOMAIN}:{settings.PORT}/{settings.DATABASE}",
    modules={"models": ["utility.database.models"]},
    generate_schemas=False,
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


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True, uds="/tmp/uvicorn.sock", proxy_headers=True)
