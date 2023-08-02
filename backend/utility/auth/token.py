import pyseto
import json
from datetime import datetime
import pytz
from pyseto import Key


async def encode_token(db_user, secret, secretphrase):
    payload = {
        "uuid": str(db_user.uuid),
        "email": str(db_user.email),
        "exp": str(datetime.now(pytz.timezone("UTC"))),
        "secretphrase": str(secretphrase),
    }

    key = Key.new(version=4, purpose="local", key=bytes(secret, "utf-8"))
    token = pyseto.encode(key, payload)

    return token.decode()


async def verify_token(token, secret, secretphrase):
    token_exp_limit = 24
    try:
        key = Key.new(version=4, purpose="local", key=bytes(secret, "utf-8"))
        decoded = pyseto.decode(key, token)
        payload = json.loads(decoded.payload)
    except Exception:
        return False

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
        assert payload["secretphrase"] == secretphrase
        return True
    except AssertionError:
        return False
