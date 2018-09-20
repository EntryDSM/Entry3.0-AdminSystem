from enum import Enum

from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import INTEGER as Integer

from app.models import db


class AdditionalTypeChoice(Enum):
    NONE = 1
    NATIONAL_MERIT = 2
    SPECIAL_ADMISSION = 3


class GraduateChoice(Enum):
    WILL = 1
    DONE = 2
    GED = 3


class AdmissionChoice(Enum):
    NORMAL = 1
    MEISTER = 2
    SOCIAL = 3


class AdmissionDetailChoice(Enum):
    NONE = 1
    BENEFICIARY = 2
    ONE_PARENT = 3
    CHA_UPPER = 4
    CHACHA_UPPER = 5
    FROM_NORTH = 6
    MULTI_CULTURE = 7
    ETC = 8


class SexChoice(Enum):
    FEMALE = 1
    MALE = 2


class UserModel(db.Model):
    __tablename__ = 'user'

    user_id = db.Column(db.String(32), primary_key=True)
    additional_type = db.Column(db.Enum(AdditionalTypeChoice), nullable=False, default=AdditionalTypeChoice.NONE)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    graduate_type = db.Column(db.Enum(GraduateChoice), nullable=False, default=GraduateChoice.WILL)
    admission = db.Column(db.Enum(AdmissionChoice), nullable=False, default=AdmissionChoice.NORMAL)
    admission_detail = db.Column(db.Enum(AdmissionDetailChoice), nullable=False, default=AdmissionDetailChoice.NONE)
    region = db.Column(db.Boolean, nullable=False, default=False)

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # one to one
    apply_status = relationship("ApplyStatusModel", uselist=False, backref="user_apply_status")
    document = relationship("DocumentModel", uselist=False, backref="user_document")
    ged_score = relationship("GedScoreModel", uselist=False, backref="user_ged_score")
    graduate_score = relationship("GraduateScoreModel", uselist=False, backref="user_graduate_score")
    graduate_info = relationship("GraduateInfoModel", uselist=False, backref="user_graduate_info")
    info = relationship("InfoModel", uselist=False, backref="user_info")

    # one to many
    graduate_grade = relationship("GraduateGradeModel")


class ApplyStatusModel(db.Model):
    __tablename__ = 'apply_status'

    # one to one
    user_id = db.Column(db.String(32),
                        db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    final_submit = db.Column(db.Boolean, nullable=False, default=False)
    pass_status = db.Column(db.Boolean, nullable=False, default=False)
    payment = db.Column(db.Boolean, nullable=False, default=False)
    receipt = db.Column(db.Boolean, nullable=False, default=False)
    receipt_code = db.Column(Integer(display_width=3, zerofill=True, unsigned=True),
                             unique=True, nullable=False, autoincrement=True)
    exam_code = db.Column(db.String(6), nullable=True, unique=True)

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)


class DocumentModel(db.Model):
    __tablename__ = 'document'

    # one to one
    user_id = db.Column(db.String(32),
                        db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    introduce = db.Column(db.String(1600), nullable=False, default="")
    study_plan = db.Column(db.String(1600), nullable=False, default="")

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)


class InfoModel(db.Model):
    __tablename__ = 'info'

    # one to one
    user_id = db.Column(db.String(32),
                        db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    name = db.Column(db.String(20), nullable=False, default="")
    sex = db.Column(db.Enum(SexChoice), nullable=True)
    birth = db.Column(db.Date, nullable=False)
    my_tel = db.Column(db.String(15), nullable=False, default="")
    parent_name = db.Column(db.String(20), nullable=False, default="")
    parent_tel = db.Column(db.String(15), nullable=False, default="")
    address_base = db.Column(db.String(100), nullable=False, default="")
    address_detail = db.Column(db.String(50), nullable=False, default="")
    zip_code = db.Column(db.String(5), nullable=False, default="")
    img_path = db.Column(db.String(50), unique=True, nullable=True)

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
