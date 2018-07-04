from peewee import CharField

from app.models import BaseModel


class User(BaseModel):
    username = CharField(unique=True)


class Dot(BaseModel):
    dots = CharField(null=True, default='dots1')
