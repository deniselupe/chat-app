import pyseto
import json
import pytz
from typing import Annotated
from datetime import datetime
from pyseto import Key
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError
from utility.config import get_settings
from fastapi import Header, HTTPException

ph = PasswordHasher()
settings = get_settings()


class AuthUtil:
    def __init__(self):
        pass

    @staticmethod
    async def encode_token(db_user):
        payload = {
            "uuid": str(db_user.uuid),
            "email": str(db_user.email),
            "exp": str(datetime.now(pytz.timezone("UTC"))),
            "secretphrase": str(settings.TOKEN_SECRETPHRASE),
        }

        key = Key.new(
            version=4, purpose="local", key=bytes(settings.TOKEN_SECRET_LOCAL, "utf-8")
        )
        token = pyseto.encode(key, payload)

        return token.decode()

    @staticmethod
    async def verify_token(x_auth_token: Annotated[str, Header()]):
        token_exp_limit = 24
        try:
            key = Key.new(
                version=4,
                purpose="local",
                key=bytes(settings.TOKEN_SECRET_LOCAL, "utf-8"),
            )
            decoded = pyseto.decode(key, x_auth_token)
            payload = json.loads(decoded.payload)
        except Exception:
            raise HTTPException(status_code=401, detail="x-auth-token header invalid.")

        try:
            assert (
                (
                    (
                        datetime.now(pytz.timezone("UTC"))
                        - datetime.strptime(payload["exp"], "%Y-%m-%d %H:%M:%S.%f%z")
                    ).total_seconds()
                    / 60
                )
                / 60
            ) < token_exp_limit
            assert payload["secretphrase"] == settings.TOKEN_SECRETPHRASE
        except AssertionError:
            raise HTTPException(status_code=401, detail="x-auth-token header invalid.")


class EncryptionUtil:
    def __init__(self):
        pass

    @staticmethod
    async def hash_password(password):
        hashed = ph.hash(password)

        return hashed

    @staticmethod
    async def verify_password(hashed, password):
        try:
            return ph.verify(hashed, password)
        except VerifyMismatchError:
            return False
