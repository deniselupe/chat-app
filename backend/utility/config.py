from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    TOKEN_SECRET_LOCAL: str = "DEFAULT"
    TOKEN_SECRETPHRASE: str = "DEFAULT"
    DB_USER: str = "DEFAULT"
    DB_PW: str = "DEFAULT"
    DOMAIN: str = "DEFAULT"
    PORT: str = "3306"
    DATABASE: str = "DEFAULT"
    GEN_SCHEMAS: bool = "True"
    RELOAD: bool = "True"
    UDS: str ="/tmp/uvicorn.sock"
    PROXY_HEADERS: bool = "True"

    model_config = SettingsConfigDict(env_file="../.env")

@lru_cache()
def get_settings():
    return Settings()