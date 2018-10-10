from tests.views import SAMPLE_GRADUATE_USER_ID, SAMPLE_GED_USER_ID
from tests.views import SAMPLE_GRADUATE_DETAIL_INFO, SAMPLE_GED_DETAIL_INFO
from tests.views import SAMPLE_GRADUATE_DETAIL_GRADE, SAMPLE_GED_DETAIL_GRADE


def test_view_detail_information(flask_app, create_fake_account):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # get Graduate detail information success 200
    resp = test_client.get(
        '/api/applicants/details/information/{}'.format(SAMPLE_GRADUATE_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 200
    assert type(resp.json) == dict
    # assert resp.json == SAMPLE_GRADUATE_DETAIL_INFO

    # get Ged detail information success 200
    resp = test_client.get(
        '/api/applicants/details/information/{}'.format(SAMPLE_GED_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 200
    assert type(resp.json) == dict
    # assert resp.json == SAMPLE_GED_DETAIL_INFO

    # non-existence applicant 400
    resp = test_client.get(
        '/api/applicants/details/information/{}'.format('101'),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 400


def test_view_detail_grade(flask_app, create_fake_account, mysql_client_for_test):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # get Graduate detail grade success 200
    resp = test_client.get(
        '/api/applicants/details/grade/{}'.format(SAMPLE_GRADUATE_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 200
    assert type(resp.json) == dict
    # assert resp.json == SAMPLE_GRADUATE_DETAIL_GRADE

    # get GED detail grade success 200
    resp = test_client.get(
        '/api/applicants/details/grade/{}'.format(SAMPLE_GED_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 200
    assert type(resp.json) == dict
    # assert resp.json == SAMPLE_GED_DETAIL_GRADE

    # non-existence applicant 400
    resp = test_client.get(
        '/api/applicants/details/grade/{}'.format('any'),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 400

    # applicant who has yet final_submitted 400
    mysql_client_for_test.cursor().execute("UPDATE apply_status SET final_submit=0 WHERE user_id='002';")
    mysql_client_for_test.commit()

    resp = test_client.get(
        '/api/applicants/details/grade/{}'.format('002'),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 400

    mysql_client_for_test.cursor().execute("UPDATE apply_status SET final_submit=1 WHERE user_id='002';")
    mysql_client_for_test.commit()


def test_print_one_excel(flask_app, create_fake_account):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # print exam table 200
    resp = test_client.post(
        '/api/applicants/details/excel/{}'.format(SAMPLE_GED_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 201
    assert resp.headers['Content-Disposition'] == "attachment; filename=applicants.csv"
    assert resp.headers['Content-type'] == 'text/csv'
    assert resp.get_data(as_text=True).count("\n") == 2
    assert '\ufeff' in resp.get_data(as_text=True)

    # non-existence 400
    resp = test_client.post(
        '/api/applicants/details/excel/{}'.format('101'),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 400


def test_print_one_exam_table(flask_app, create_fake_account):
    test_client = flask_app.test_client()
    admin = create_fake_account

    resp = test_client.get(
        '/api/applicants/details/exam_table/{}'.format(SAMPLE_GED_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 200
    assert type(resp.json) == dict
    assert sorted(resp.json) == sorted(['img_path', 'exam_code', 'name', 'middle_school', 'region', 'admission', 'receipt_code'])
