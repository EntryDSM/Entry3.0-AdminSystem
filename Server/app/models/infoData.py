from datetime import datetime

from peewee import CharField, BooleanField, TextField, DateTimeField, IntegerField

from app.models import BaseModel, EnumField, ADMISSION_CHOICES, ADMISSION_DETAIL_CHOICE


class Info(BaseModel):
    id = IntegerField(primary_key=True)
    # user_id foreign key
    address_base = CharField(max_length=100, null=True, default=" ")
    address_detail = CharField(max_length=50, null=True, default=" ")
    admission = EnumField(choices=ADMISSION_CHOICES, null=True, default=1)
    admission_detail = EnumField(choices=ADMISSION_DETAIL_CHOICE, null=True, default=0)
    region = BooleanField(null=True, default=False)
    name = CharField(max_length=12, null=True, default="")
    sex = BooleanField(null=True, default=True)
    parent_name = CharField(max_length=12, null=True, default=" ")
    parent_tel = CharField(max_length=20, null=True, default=" ")
    my_tel = CharField(max_length=20, null=True, default=" ")
    introduce = TextField(null=True, default=" ")
    study_plan = TextField(null=True, default=" ")
    image_path = CharField(unique=True, max_length=50, null=True, default=" ")
    exam_code = CharField(unique=True, max_length=6, null=True, default=" ")
    create_at = DateTimeField(null=True, default=datetime.now)
    update_at = DateTimeField(null=True, default=datetime.now)
    receipt_code = IntegerField(unique=True, null=True)


class GraduateInfo(BaseModel):
    pass


class GedInfo(BaseModel):
    pass
