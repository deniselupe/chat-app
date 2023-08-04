from pydantic import BaseModel, EmailStr, SecretStr


class UserWebInbound(BaseModel):
    email: EmailStr
    password: SecretStr
