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

    model_config = SettingsConfigDict(env_file=".env")

@lru_cache()
def get_settings():
    return Settings()