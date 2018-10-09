from flask import Blueprint
from flask_restful import Api
from flasgger import swag_from

from app.views import BaseResource, check_auth
from app.views import calculate_competition_rates, filter_for_statistic, calculate_amount_on_score

from app.models import db
from app.models.user_models import UserModel

from app.docs.statistic import VIEW_AMOUNT_GET

api = Api(Blueprint(__name__, __name__))

api.prefix = '/api'


@api.resource('/statistic')
class ViewAmount(BaseResource):
    @swag_from(VIEW_AMOUNT_GET)
    @check_auth()
    def get(self):
        amount = db.session.query(UserModel)
        number_of_applicants = {
            'daejeon': {
                'meister': filter_for_statistic(amount, admission=2, region=True).count(),
                'social': filter_for_statistic(amount, admission=3, region=True).count(),
                'normal': filter_for_statistic(amount, admission=1, region=True).count(),
                'total': filter_for_statistic(amount, region=True).count()
            },
            'nationwide': {
                'meister': filter_for_statistic(amount, admission=2, region=False).count(),
                'social': filter_for_statistic(amount, admission=3, region=False).count(),
                'normal': filter_for_statistic(amount, admission=1, region=False).count(),
                'total': filter_for_statistic(amount, region=False).count(),
            },
            'total': filter_for_statistic(amount).count()
        }

        competition_rate = {
            'daejeon': {
                'meister': calculate_competition_rates(number_of_applicants['daejeon']['meister'], 20),
                'social': calculate_competition_rates(number_of_applicants['daejeon']['social'], 8),
                'normal': calculate_competition_rates(number_of_applicants['daejeon']['normal'], 36),
                'total': calculate_competition_rates(number_of_applicants['daejeon']['total'], 64)
            },
            'nationwide': {
                'meister': calculate_competition_rates(number_of_applicants['nationwide']['meister'], 28),
                'social': calculate_competition_rates(number_of_applicants['nationwide']['social'], 8),
                'normal': calculate_competition_rates(number_of_applicants['nationwide']['normal'], 60),
                'total': calculate_competition_rates(number_of_applicants['nationwide']['total'], 96)
            },
            'total': calculate_competition_rates(amount.count(), 160)
        }

        on_score = {
            'daejeon': {
                'meister': calculate_amount_on_score(filter_for_statistic(amount, admission=2, region=True).all()),
                'social': calculate_amount_on_score(filter_for_statistic(amount, admission=3, region=True).all()),
                'normal': calculate_amount_on_score(filter_for_statistic(amount, admission=1, region=True).all())
            },
            'nationwide': {
                'meister': calculate_amount_on_score(filter_for_statistic(amount, admission=2, region=False).all()),
                'social': calculate_amount_on_score(filter_for_statistic(amount, admission=3, region=False).all()),
                'normal': calculate_amount_on_score(filter_for_statistic(amount, admission=1, region=False).all())
            }
        }

        return {
            'numberOfApplicants': number_of_applicants,
            'competitionRate': competition_rate,
            'onScore': on_score
        }
