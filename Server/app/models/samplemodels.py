from peewee import Model, CharField

from app.models import mysql_db


class BaseModel(Model):
    class Meta:
        database = mysql_db


class User(BaseModel):
    username = CharField(unique=True)


class Dot(BaseModel):
    dots = CharField(null=True, default='dots1')
