def test_view_applicants(flask_app, mysql_client_for_test, create_fake_account, create_forbidden_token):
    test_client = flask_app.test_client()
    admin = create_fake_account

    for line in open('../SQL/entry_dummy.sql'):
        mysql_client_for_test.cursor().execute(line)

    mysql_client_for_test.commit()

    # search success 200
    resp = test_client.get('/applicants', headers={'Authorization': admin['accessToken']})

    assert resp.status_code == 200
    assert type(resp.json) == list
    assert type(resp.json[0]) == dict
    assert sorted(resp.json[0].keys()) == sorted(['user_id', 'receipt_code', 'name', 'region', 'admission', 'receipt', 'payment'])

    # no token 401
    resp = test_client.get('/applicants')

    assert resp.status_code == 401

    # invalid token 403
    resp = test_client.get('/applicants', headers={'Authorization': create_forbidden_token})

    assert resp.status_code == 403


def test_print_excel():
    pass


def test_print_exam_table():
    pass
