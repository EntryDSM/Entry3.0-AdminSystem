from sqlalchemy.dialects.mysql import INTEGER as Integer
from sqlalchemy.dialects.mysql import DOUBLE as Double

from app.models import db


class GedScoreModel(db.Model):
    __tablename__ = 'ged_score'

    # one to many
    user_id = db.Column(db.String(32),
                        db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    grade = db.Column(Double(unsigned=True), nullable=False, default=0.0)
    conversion_score = db.Column(Double(unsigned=True), nullable=False, default=0.0)
    attendance_score = db.Column(Integer(unsigned=True), nullable=False, default=15)
    volunteer_score = db.Column(Double(unsigned=True), nullable=False, default=0.0)
    final_score = db.Column(Double(), nullable=False)

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
