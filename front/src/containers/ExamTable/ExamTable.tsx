import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { Container, PrintArea, Functions, PrintButton, DownloadPDFButton } from './local-styled/ExamTable';
import ExamTable9RowsInPage from './ExamTable9RowsInPage';

const mapStateToProps = (state: any) => ({
  applicants: state.applicants
});

interface Props {
  applicants: ApplicantsData;
}
interface State {
  rows: Array<ExamTableRow>;
}

class ExamTable extends Component<Props, State> {
  state = {
    rows: []
  }

  printExamTable = () => {
    const target = document.getElementById('exam-table-print-area').cloneNode(true);
    const container = document.getElementById('exam-table-container');
    const functions = document.getElementById('exam-table-functions')

    window.onbeforeprint = () => {
      container.style.display = 'none';
      functions.style.display = 'none';
      document.body.appendChild(target);
    }
    window.onafterprint = () => {
      container.style.display = 'block';
      functions.style.display = 'block';
      document.body.removeChild(target);
    }
    window.print();
  }

  back = () => {
    window.history.back();
  }

  async componentDidMount() {
    const jwt = new Cookies().get('accessToken');
    try {
      const response = await axios.post('https://admin-api.entrydsm.hs.kr:80/api/applicants/exam_table',
        {
          users: this.props.applicants.map(applicant => applicant.user_id)
        },
        {
          headers: {
            Authorization: jwt
          }
        }
      )
      const rows = response.data;
      this.setState({ rows });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.rows.length === 0) {
      return <div>Loading...</div>
    } else {
      const rows = [];
      const rowLength: number = this.state.rows.length;
      const pageCount: number = rowLength % 9 === 0 ? Math.floor(rowLength / 9) : Math.floor(rowLength / 9) + 1;
      for (let i = 0; i < pageCount; i++) {
        rows.push(this.state.rows.slice(i * 9, i * 9 + 9));
      }
      return (
        <Fragment>
          <Container id='exam-table-container'>
            <PrintArea id='exam-table-print-area'>
              {
                rows.map(datas => <ExamTable9RowsInPage datas={datas} />)
              }
            </PrintArea>
          </Container>
          <Functions id='exam-table-functions'>
            <PrintButton onClick={this.printExamTable}>
              출력하기
            </PrintButton>
            <DownloadPDFButton onClick={this.back}>
              뒤로가기
            </DownloadPDFButton>
          </Functions>
        </Fragment>
      );
    }
  }
}

export default connect(mapStateToProps)(ExamTable);