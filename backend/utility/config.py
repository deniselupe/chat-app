from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

class GlobalSettings(BaseSettings):
    TOKEN_SECRET_LOCAL: str = "DEFAULT"
    TOKEN_SECRETPHRASE: str = "DEFAULT"
    DB_USER: str = "DEFAULT"
    DB_PW: str = "DEFAULT"
    DOMAIN: str = "DEFAULT"
    PORT: str = "3306"
    DATABASE: str = "DEFAULT"
    GEN_SCHEMAS: bool = "True"
    RELOAD: bool = "True"
    UDS: str = "/tmp/uvicorn.sock"
    PROXY_HEADERS: bool = "True"
    DISCORD_CLIENT_ID: str = "DEFAULT"
    DISCORD_SECRET: str = "DEFAULT"
    GITHUB_CLIENT_ID: str = "DEFAULT"
    GITHUB_SECRET: str = "DEFAULT"

    model_config = SettingsConfigDict(env_file="../.env")

class LocalSettings(BaseSettings):
    GEN_SCHEMASl: str
    SSO_DOMAIN: str

    model_config = SettingsConfigDict(env_file="../.env.local")

@lru_cache()
def get_global_settings():
    return GlobalSettings(), LocalSettings()
