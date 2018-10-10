from tests.views import SAMPLE_GRADUATE_USER_ID, SAMPLE_GED_USER_ID


def test_convert_receipt(flask_app, create_fake_account, mysql_client_for_test):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # convert receipt data success 201
    mysql_client_for_test.cursor().execute("UPDATE apply_status SET receipt=0 WHERE user_id='002';")
    mysql_client_for_test.commit()

    resp = test_client.patch(
        '/api/applicants/details/receipt/{}'.format(SAMPLE_GRADUATE_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    # true -> false
    assert resp.status_code == 201

    resp = test_client.patch(
        '/api/applicants/details/receipt/{}'.format(SAMPLE_GRADUATE_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    # false -> true
    assert resp.status_code == 201

    # non-existence applicant 400
    resp = test_client.patch(
        '/api/applicants/details/receipt/{}'.format('101'),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 400


def test_convert_payment(flask_app, create_fake_account, mysql_client_for_test):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # convert payment data success 201
    mysql_client_for_test.cursor().execute("UPDATE apply_status SET payment=0 WHERE user_id='002';")
    mysql_client_for_test.commit()

    resp = test_client.patch(
        '/api/applicants/details/payment/{}'.format(SAMPLE_GRADUATE_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    # true -> false
    assert resp.status_code == 201

    resp = test_client.patch(
        '/api/applicants/details/payment/{}'.format(SAMPLE_GRADUATE_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    # false -> true
    assert resp.status_code == 201

    # non-existence applicant 400
    resp = test_client.patch(
        '/api/applicants/details/payment/{}'.format('101'),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 400


def test_issue_exam_code(flask_app, create_fake_account):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # issue exam_code success 201
    resp = test_client.patch(
        '/api/applicants/details/exam_code/{}'.format(SAMPLE_GRADUATE_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 201

    # non-existence 400
    resp = test_client.patch(
        '/api/applicants/details/exam_code/{}'.format('101'),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 400


def test_reversal_final_submit(flask_app, create_fake_account, mysql_client_for_test):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # revere final_submit success 201
    resp = test_client.patch(
        '/api/applicants/details/final_submit/{}'.format(SAMPLE_GED_USER_ID),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 201

    mysql_client_for_test.cursor().execute("UPDATE apply_status SET final_submit=1 WHERE user_id='009';")
    mysql_client_for_test.commit()

    # non-existence 400
    resp = test_client.patch(
        '/api/applicants/details/final_submit/{}'.format('101'),
        headers={'Authorization': admin['accessToken']}
    )

    assert resp.status_code == 400
