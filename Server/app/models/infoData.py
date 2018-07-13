from datetime import datetime
from enum import Enum

from sqlalchemy.dialects.mysql import INTEGER as Integer

from app.models import db


class AdmissionChoice(Enum):
    NORMAL = 1
    MEISTER = 2
    SOCIAL = 3


class AdmissionDetailChoice(Enum):
    DEFAULT = 0
    BENEFICIARY = 1
    ONE_PARENT = 2
    CHA_UPPER = 3
    CHACHA_UPPER = 4
    FROM_NORTH = 5
    MULTI_CULTURE = 6
    ETC = 7


class InfoModel(db.Model):
    __tablename__ = 'Info'

    info_id = db.Column(Integer(display_width=11, zerofill=True, unsigned=True), autoincrement=True, primary_key=True)
    # user_id fk
    address_base = db.Column(db.String(100), default="")
    address_detail = db.Column(db.String(50), default="")
    admission = db.Column(db.Enum(AdmissionChoice), default=AdmissionChoice.NORMAL)
    admission_detail = db.Cloumn(db.Enum(AdmissionDetailChoice), default=AdmissionDetailChoice.DEFAULT)
    region = db.Column(db.Boolean, default=False)
    name = db.Column(db.String(12), default="")
    sex = db.Column(db.Boolean, default=True)
    parent_name = db.Column(db.String(12), default="")
    parent_tel = db.Column(db.String(20), default="")
    my_tel = db.Column(db.String(20), default="")
    introduce = db.Column(db.Text(1600), default="")
    study_plan = db.Column(db.Text(1600), default="")
    img_path = db.Column(db.String(50), unique=True, default="")
    exam_code = db.Column(db.String(6), unique=True, default="")
    create_at = db.Column(db.DateTime, default=datetime.now)
    update_at = db.Column(db.DateTime, default=datetime.now)
    receipt_code = db.Column(Integer(display_width=3, zerofill=True, unsigned=True),
                             autoincrement=True, unique=True, nullable=True)
