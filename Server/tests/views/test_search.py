def test_view_applicants(flask_app, create_fake_account, create_forbidden_token):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # search success 200
    resp = test_client.get('/api/applicants', headers={'Authorization': admin['accessToken']})

    assert resp.status_code == 200
    assert type(resp.json) == list
    assert type(resp.json[0]) == dict
    assert sorted(resp.json[0].keys()) == sorted(['user_id', 'receipt_code', 'name', 'region', 'admission', 'receipt', 'payment', 'is_submit'])

    # invalid token 403
    resp = test_client.get('/api/applicants', headers={'Authorization': create_forbidden_token})

    assert resp.status_code == 403


def test_print_all_excel(flask_app, create_fake_account):
    test_client = flask_app.test_client()
    admin = create_fake_account

    #
    users = ['002', '008', '012']

    # print excel success 201
    resp = test_client.post(
        '/api/applicants/excel',
        headers={'Authorization': admin['accessToken']},
        json={'users': users})

    assert resp.status_code == 201
    assert resp.headers['Content-Disposition'] == "attachment; filename=applicants.csv"
    assert resp.headers['Content-type'] == 'text/csv'
    assert resp.get_data(as_text=True).count("\n") == len(users) + 1
    assert '\ufeff' in resp.get_data(as_text=True)


def test_print_all_exam_table(flask_app, create_fake_account):
    test_client = flask_app.test_client()
    admin = create_fake_account

    #
    users = ['002', '008', '012']

    # print exam table 200
    resp = test_client.post(
        '/api/applicants/exam_table',
        headers={'Authorization': admin['accessToken']},
        json={'users': users}
    )

    assert resp.status_code == 200
    assert type(resp.json) == list
    assert len(resp.json) == len(users)
    assert type(resp.json[0]) == dict
    assert sorted(resp.json[0].keys()) == sorted(['img_path', 'exam_code', 'name', 'middle_school', 'region', 'admission', 'receipt_code'])
