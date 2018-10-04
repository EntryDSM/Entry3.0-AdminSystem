from tests.views import SAMPLE_GRADUATE_DETAIL_INFO, SAMPLE_GED_DETAIL_INFO
from tests.views import SAMPLE_GRADUATE_DETAIL_GRADE, SAMPLE_GED_DETAIL_GRADE


def test_view_detail_information(flask_app, create_fake_account, create_forbidden_token):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # get Graduate detail information success 200
    resp = test_client.get(
        '/applicants/details/information/{}'.format(SAMPLE_GRADUATE_DETAIL_INFO['user_id']),
        headers={'Authorization': admin['accessToken']}
    )
    SAMPLE_GRADUATE_DETAIL_INFO.pop('user_id')

    assert resp.status_code == 200
    assert type(resp.json) == dict
    assert resp.json == SAMPLE_GRADUATE_DETAIL_INFO

    # get Ged detail information success 200
    resp = test_client.get(
        '/applicants/details/information/{}'.format(SAMPLE_GED_DETAIL_INFO['user_id']),
        headers={'Authorization': admin['accessToken']}
    )
    SAMPLE_GED_DETAIL_INFO.pop('user_id')

    assert resp.status_code == 200
    assert type(resp.json) == dict
    assert resp.json == SAMPLE_GED_DETAIL_INFO

    # non-existence applicant 400
    resp = test_client.get(
        '/applicants/details/information/{}'.format('101'),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 400

    # no user_id 404
    resp = test_client.get(
        '/applicants/details/information',
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 404


def test_view_detail_grade(flask_app, create_fake_account):
    pass


def test_convert_receipt(flask_app, create_fake_account):
    pass


def test_convert_payment(flask_app, create_fake_account):
    pass


def test_issue_exam_code(flask_app, create_fake_account):
    pass


def test_print_one_excel(flask_app, create_fake_account):
    pass


def test_print_one_exam_table(flask_app, create_fake_account):
    pass


def test_reversal_final_submit(flask_app, create_fake_account):
    pass
