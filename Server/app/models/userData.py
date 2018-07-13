from datetime import datetime

from peewee import CharField, DateTimeField

from app.models import BaseModel


class User(BaseModel):
    id = CharField(primary_key=True, max_length=32)
    email = CharField(unique=True, max_length=50, null=False)
    password = CharField(max_length=100, null=False)
    create_at = DateTimeField(null=True, default=datetime.now)
