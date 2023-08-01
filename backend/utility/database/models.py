from tortoise import fields, Model


class UserDetails(Model):
    uuid = fields.UUIDField(pk=True)
    email = fields.CharField(unique=True, max_length=255)
    password = fields.CharField(max_length=255)