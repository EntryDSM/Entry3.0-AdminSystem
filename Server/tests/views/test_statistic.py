from tests.views import SAMPLE_AMOUNT_STATISTIC


def test_view_amount(flask_app, create_fake_account, create_forbidden_token):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # view amount success 200
    resp = test_client.get('/api/statistic', headers={'Authorization': admin['accessToken']})

    assert resp.status_code == 200
    assert type(resp.json) == dict
    assert resp.json == SAMPLE_AMOUNT_STATISTIC

    # invalid token 403
    resp = test_client.get('/api/statistic', headers={'Authorization': create_forbidden_token})

    assert resp.status_code == 403
