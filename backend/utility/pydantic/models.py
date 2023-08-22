from pydantic import BaseModel, EmailStr, SecretStr, field_validator
from typing import Optional


class UserLogin(BaseModel):
    email: EmailStr
    password: SecretStr


class UserCreationWeb(BaseModel):
    email: EmailStr
    password: SecretStr
    source: Optional[str] = "website"

    @field_validator("source")
    @classmethod
    def validate_source(cls, s: str):
        if s != "website":
            raise ValueError("Bad source.")
        return s

class DiscordInbound(BaseModel):
    userid: int
    username: str

