import pyseto
import json
import pytz
import requests
import secrets
from cachetools import TTLCache
from utility.database.models import UserDetails
from typing import Annotated
from datetime import datetime
from pyseto import Key
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError
from utility.config import get_settings
from fastapi import Header, HTTPException
from fastapi.responses import RedirectResponse

ph = PasswordHasher()
global_settings, local_settings = get_settings()
state_cache = TTLCache(maxsize=100, ttl=60)
user_cache = TTLCache(maxsize=100, ttl=60)


class AuthUtil:
    def __init__(self):
        pass

    @staticmethod
    async def encode_token(db_user):
        payload = {
            "uuid": str(db_user.uuid),
            "email": str(db_user.email),
            "exp": str(datetime.now(pytz.timezone("UTC"))),
            "secretphrase": str(global_settings.TOKEN_SECRETPHRASE),
        }

        key = Key.new(
            version=4,
            purpose="local",
            key=bytes(global_settings.TOKEN_SECRET_LOCAL, "utf-8"),
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
                key=bytes(global_settings.TOKEN_SECRET_LOCAL, "utf-8"),
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
            assert payload["secretphrase"] == global_settings.TOKEN_SECRETPHRASE
        except AssertionError:
            raise HTTPException(status_code=401, detail="x-auth-token header invalid.")

    @staticmethod
    async def build_auth_url(provider, intent):
        state_id = secrets.token_urlsafe(16)
        state_cache[state_id] = (state_id, intent)
        if provider == "discord":
            return f"https://discord.com/api/oauth2/authorize?client_id={global_settings.DISCORD_CLIENT_ID}&redirect_uri=https%3A%2F%2F{local_settings.SSO_DOMAIN}%2Fapi%2Fauth%2Fuser%2Fsso&response_type=code&scope=identify%20email&state={state_id}"
        else:
            return HTTPException(status_code=400, detail="no provider flag.")

    @staticmethod
    async def verify_cache_state(state):
        return state_cache.get(state)


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


class SSOUtil:
    def __init__(self):
        pass

    @staticmethod
    async def ret_discord_user_info(code: Annotated[str, None]):
        data = {
            "client_id": str(global_settings.DISCORD_CLIENT_ID),
            "client_secret": str(global_settings.DISCORD_SECRET),
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": "https://ptilol.com/api/auth/user/sso",
        }
        headers = {"Content-Type": "application/x-www-form-urlencoded"}

        try:
            r = requests.post(
                "https://discord.com/api/oauth2/token", data=data, headers=headers
            ).json()
            user_headers = {"authorization": f"{r['token_type']} {r['access_token']}"}
            r = requests.get(
                "https://discord.com/api/users/@me", headers=user_headers
            ).json()

        except Exception:
            raise HTTPException(status_code=401, detail="something has failed...")
        return r

    @staticmethod
    async def SSO_validator(code, state, source):
        state_val = await AuthUtil.verify_cache_state(state)
        if state_val is None:
            return RedirectResponse(url="https://ptilol.com/signin")
        else:
            pass

        if source == "https://discord.com/":
            discord_user_info = await SSOUtil.ret_discord_user_info(code)

        return discord_user_info, state_val[1]


class DatabaseUtil:
    @staticmethod
    async def check_user_exist(u):
        try:
            user_info = await UserDetails.get(email=u["email"])
        except Exception as e:
            return str(e)

        return user_info

    @staticmethod
    async def create_new_user(u):
        await UserDetails.create(
            discord_user_id=int(u["id"]),
            discord_true_username=u["username"],
            discord_global_nickname=u["global_name"],
            discord_email_verified=u["verified"],
            account_creation_source="discord",
            email=u["email"],
        )

        return
