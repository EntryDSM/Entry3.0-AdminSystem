from enum import Enum

from sqlalchemy.dialects.mysql import INTEGER as Integer
from sqlalchemy.dialects.mysql import DOUBLE as Double

from app.models import db


class GradeChoice(Enum):
    A = 1
    B = 2
    C = 3
    D = 4
    E = 5
    F = 6
    X = 7


class GraduateGradeModel(db.Model):
    __tablename__ = 'graduate_grade'

    # one to many
    user_id = db.Column(db.String(32),
                        db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    semester = db.Column(Integer(), primary_key=True)
    korean = db.Column(db.Enum(GradeChoice), nullable=False, default=GradeChoice.X)
    social = db.Column(db.Enum(GradeChoice), nullable=False, default=GradeChoice.X)
    history = db.Column(db.Enum(GradeChoice), nullable=False, default=GradeChoice.X)
    math = db.Column(db.Enum(GradeChoice), nullable=False, default=GradeChoice.X)
    science = db.Column(db.Enum(GradeChoice), nullable=False, default=GradeChoice.X)
    tech = db.Column(db.Enum(GradeChoice), nullable=False, default=GradeChoice.X)
    english = db.Column(db.Enum(GradeChoice), nullable=False, default=GradeChoice.X)

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)


class GraduateScoreModel(db.Model):
    __tablename__ = 'graduate_score'

    # one to one
    user_id = db.Column(db.String(32),
                        db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    first_grade = db.Column(Double(unsigned=True), nullable=False, default=0.0)
    second_grade = db.Column(Double(unsigned=True), nullable=False, default=0.0)
    third_grade = db.Column(Double(unsigned=True), nullable=False, default=0.0)
    conversion_score = db.Column(Double(unsigned=True), nullable=False, default=0.0)
    attendance_score = db.Column(Integer(unsigned=True), nullable=False, default=0)
    volunteer_score = db.Column(Double(unsigned=True), nullable=False, default=0.0)
    final_score = db.Column(Double(), nullable=False)
    volunteer_time = db.Column(Integer(unsigned=True), nullable=False, default=0)
    period_cut = db.Column(Integer(unsigned=True), nullable=False, default=0)
    full_cut = db.Column(Integer(unsigned=True), nullable=False, default=0)
    late = db.Column(Integer(unsigned=True), nullable=False, default=0)
    early_leave = db.Column(Integer(unsigned=True), nullable=False, default=0)

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)


class GraduateInfoModel(db.Model):
    __tablename__ = 'graduate_info'

    # one to one
    user_id = db.Column(db.String(32),
                        db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    # one to one
    school_code = db.Column(db.String(32),
                            db.ForeignKey('school.code', ondelete='CASCADE', onupdate='CASCADE'), nullable=True)
    graduate_year = db.Column(Integer(unsigned=True), nullable=False, default=2019)
    # school_name = db.Column(db.String(50), nullable=False, default="")
    school_tel = db.Column(db.String(15), nullable=False, default="")
    student_class = db.Column(Integer(unsigned=True), nullable=True)
    student_grade = db.Column(Integer(unsigned=True), nullable=False, default=3)
    student_number = db.Column(Integer(unsigned=True), nullable=True)

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
