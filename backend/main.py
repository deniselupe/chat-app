import uvicorn
from pydantic import BaseModel, SecretStr
from fastapi import FastAPI, Response
from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(root_path="/api")

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserDetails(BaseModel):
    username: SecretStr
    password: SecretStr


@app.post("/auth")
async def auth(
    user_info: Annotated[UserDetails, "These are the user details!"], response: Response
):
    response.headers["X-Auth-Token"] = "TOKEN"
    return 200


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True, uds="/tmp/uvicorn.sock", proxy_headers=True)
