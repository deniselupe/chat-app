from tortoise import fields, Model


class UserDetails(Model):
    # CORE USER INFO
    uuid = fields.UUIDField(pk=True)

    # WEBSITE USER INFO
    uuid = fields.UUIDField(pk=True)
    email = fields.CharField(unique=True, max_length=30)
    password = fields.CharField(max_length=255, null=True)
    last_login = fields.DatetimeField(auto_now=False, auto_now_add=True)

    # DISCORD USER INFO
    discord_user_id = fields.BigIntField(unique=True)
    discord_true_username = fields.CharField(unique=True, max_length=30)
    discord_global_nickname = fields.CharField(unique=True, max_length=30)
    discord_email_verified = fields.BooleanField(default=None)

    # SECONDARY USER INFO
    account_created_on = fields.DatetimeField(auto_now_add=True)
    account_creation_source = fields.CharField(max_length=25)
    last_password_change = fields.DatetimeField(auto_now=False, auto_now_add=True)
    last_discord_message = fields.DatetimeField(auto_now=False, auto_now_add=True)
