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

@app.get("/brew_coffee", status_code=418)
async def brew_coffee():
    return "I can't brew coffee because..."

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        reload=settings.RELOAD,
        uds=settings.UDS,
        proxy_headers=settings.PROXY_HEADERS,
    )
