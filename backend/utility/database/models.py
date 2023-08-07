from tortoise import fields, Model


class UserDetails(Model):
    # CORE WEBSITE USER INFO
    uuid = fields.UUIDField(pk=True)
    email = fields.CharField(unique=True, max_length=30)
    password = fields.CharField(max_length=255)
    last_login = fields.DatetimeField(auto_now=False, auto_now_add=True)

    # SECONDARY USER INFO
    account_created_on = fields.DatetimeField(auto_now_add=True)
    account_creation_source = fields.CharField(max_length=25)
    last_password_change = fields.DatetimeField(auto_now=False, auto_now_add=True)
