import pyseto
import json
from datetime import datetime, timezone
from pyseto import Key


async def encode_token(db_user, secret, secretphrase):
    payload = {
        "uuid": str(db_user.uuid),
        "email": str(db_user.email),
        "exp": str(datetime.now(timezone.utc).astimezone().isoformat()),
        "secretphrase": str(secretphrase),
    }

    key = Key.new(version=4, purpose="local", key=bytes(secret, "utf-8"))
    token = pyseto.encode(key, payload)

    return token.decode()


async def verify_token(token, secret, secretphrase):
    key = Key.new(version=4, purpose="local", key=bytes(secret, "utf-8"))
    decoded = pyseto.decode(key, token)

    payload = json.loads(decoded.payload)
    try:
        exp = (datetime.now(timezone.utc).astimezone().isoformat()) - (
            datetime.strptime(payload["exp"], "%Y-%m-%dT%H:%M:%S.%f%z")
        )
        print(exp)
        assert payload["secretphrase"] == secretphrase
        return True
    except AssertionError:
        return False
