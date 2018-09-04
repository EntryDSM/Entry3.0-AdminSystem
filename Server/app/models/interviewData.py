from enum import Enum

from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import INTEGER as Integer

from app.models import db


class QuestionTypeChoice(Enum):
    APTITUDE = 1
    DEPTH = 2
    CODING = 3


class InterviewFinalModel(db.Model):
    __tablename__ = 'interview_final'

    # one to one
    user_id = db.Column(db.String(32),
                        db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    final_score = db.Column(Integer(unsigned=True), nullable=True)


class InterviewData(db.Model):
    __tablename__ = 'interview_data'

    # one to many => user
    # one to many => admin
    # one to one => question
    user_id = db.Column(db.String(32),
                        db.ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    admin_id = db.Column(db.String(32),
                         db.ForeignKey('admin.admin_id', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    question_id = db.Column(Integer(unsigned=True),
                            db.ForeignKey('question.question_id', ondelete='CASCADE', onupdate='CASCADE'),
                            primary_key=True)
    comment = db.Column(db.String(255), nullable=True)
    interview_result = db.Column(db.JSON, nullable=True)
    interview_score = db.Column(Integer(unsigned=True), nullable=False)
    take_interview = db.Column(db.Boolean, nullable=True, default=True)


class Question(db.Model):
    __tablename__ = 'question'

    question_id = db.Column(Integer(unsigned=True), primary_key=True, autoincrement=True)
    question_type = db.Column(db.Enum(QuestionTypeChoice), nullable=False, default=QuestionTypeChoice.APTITUDE)
    body = db.Column(db.String(1023), nullable=True)
    form = db.Column(db.JSON, nullable=True)
    title = db.Column(db.String(60), nullable=True)

    # one to one
    interview_data = relationship("InterviewData", uselist=False, backref="question")
