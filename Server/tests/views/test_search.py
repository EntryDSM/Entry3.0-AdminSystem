def test_view_applicants(flask_app, mysql_client_for_test):
    for line in open('../SQL/entry_data_sql.sql'):
        mysql_client_for_test.execute(line)

        assert 1 == 2


def test_print_excel():
    pass


def test_print_exam_table():
    pass
