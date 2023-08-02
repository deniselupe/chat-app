from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError

ph = PasswordHasher()

async def hash_password(password):

    hashed = ph.hash(password)
    
    return hashed

async def verify_password(hashed, password):
    try:
        return ph.verify(hashed, password)
    except VerifyMismatchError:
        return False