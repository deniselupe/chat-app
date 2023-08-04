from tortoise import fields, Model


class UserDetails(Model):
    uuid = fields.UUIDField(pk=True)
    email = fields.CharField(unique=True, max_length=255)
    password = fields.CharField(max_length=255)
    created_on = fields.DatetimeField(auto_now_add=True)
    last_modified = fields.DatetimeField(auto_now=False, auto_now_add=True)
    last_login = fields.DatetimeField(auto_now=False, auto_now_add=True)
