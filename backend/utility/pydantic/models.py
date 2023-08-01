from pydantic import BaseModel

class UserWebInbound(BaseModel):
    email: str
    password: str