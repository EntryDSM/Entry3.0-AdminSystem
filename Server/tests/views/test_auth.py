import pytest
import jwt


def test_auth(flask_app, create_fake_account, mysql_client_for_test):
    test_client = flask_app.test_client()
    admin = create_fake_account

    # auth success 200
    resp = test_client.post('/api/auth', json={'id': admin['admin_id'], 'pw': admin['password']})

    assert resp.status_code == 200
    data = resp.json
    assert isinstance(data, dict)
    assert 'accessToken' in data
    assert 'refreshToken' in data
    assert isinstance(data['accessToken'], str)
    assert isinstance(data['refreshToken'], str)
    assert jwt.decode(data['accessToken'], flask_app.config['SECRET_KEY'], 'HS256')['identity'] == admin['admin_id']
    assert jwt.decode(data['refreshToken'], flask_app.config['SECRET_KEY'], 'HS256')['identity'] == admin['admin_id']

    # wrong password 400
    resp = test_client.post('/api/auth', json={'id': admin['admin_id'], 'pw': admin['password'] + '1'})

    assert resp.status_code == 400

    # non-exist id 400
    resp = test_client.post('/api/auth', json={'id': admin['admin_id'] + '1', 'pw': admin['password']})

    assert resp.status_code == 400
