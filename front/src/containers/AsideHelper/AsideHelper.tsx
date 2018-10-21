import React, { Component } from 'react';
import axios from 'axios';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Cookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Aside } from './local-styled/AsideHelper';
import * as applicants from '../../modules/applicants/actionCreator';
import * as checks from '../../modules/checks/actionCreator';
import * as exam from '../../modules/exam/actionCreator';
import ApplicantsHelper from './ApplicantsHelper';
import ApplicantHelper from './ApplicantHelper';
import NotSubmitApplicantHelper from './NotSubmitApplicantHelper';


const mapStateToProps = (state: any) => ({
  applicants: state.applicants,
  checks: state.checks,
  aside: state.aside
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  applicantsActionCreators: bindActionCreators(applicants, dispatch),
  checksActionCreators: bindActionCreators(checks, dispatch),
  examActionCreators: bindActionCreators(exam, dispatch)
});

interface State {
  search: string;
  checkDatas: Array<SubmitApplicantInfo|NotSubmitApplicantInfo>;
  checkIds: Array<string>;
}

class AsideHelper extends Component<any, State> {
  state = {
    search: '',
    checkDatas: [],
    checkIds: []
  }

  componentDidMount() {
    this.search('');
  }

  updateChecksData = async (checks: Array<string>) => {
    const checkDatas = await Promise.all(checks.map(async userId => {
      const response = await axios.get(`https://admin-api.entrydsm.hs.kr:80/api/applicants/details/information/${userId}`, {
        headers: {
          Authorization: `JWT ${this.props.cookies.cookies.accessToken}`
        }
      });
      return response.data;
    }))
    this.setState({
      checkDatas: checkDatas
    })
  }

  search = (searchText: string): void => {
    const jwt = `JWT ${new Cookies().get('accessToken')}`;
    this.props.applicantsActionCreators.updateApplicantsData(jwt, searchText);
  }

  inputSearch = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      search: event.currentTarget.value
    });
    this.search(event.currentTarget.value);
  }

  getCSVFile = () => {
    const jwt = new Cookies().get('accessToken');
    this.props.applicantsActionCreators.requestExcel(jwt);
  }

  issuingExaminationNumber = async () => {
    const jwt = new Cookies().get('accessToken');
    this.props.examActionCreators.issuingExaminationNumber(jwt);
  }

  cancleFinalSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    const jwt = new Cookies().get('accessToken');
    await axios.patch(`https://admin-api.entrydsm.hs.kr:80/api/applicants/details/final_submit/${event.currentTarget.id}`,
      null,
      {
        headers: {
          Authorization: jwt
        }
      }
    )
    this.search('');
  }

  printExamTable = () => {
    this.props.history.push('/exam');
  }
  
  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.checks.length !== prevState.checkIds.length) {
      return {
        checkIds: nextProps.checks
      };
    } else {
      return {
        ...prevState
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.checkIds.length !== prevState.checkIds.length)
      this.updateChecksData(this.state.checkIds);
  }

  render() {
    if (this.state.checkDatas.length === 0) {
      return (
        <Aside>
          <ApplicantsHelper
            searchText={this.state.search}
            onSearch={this.search}
            onSearchInput={this.inputSearch}
            getCSVFile={this.getCSVFile}
            issuingExaminationNumber={this.issuingExaminationNumber}
            printExamTable={this.printExamTable} />
        </Aside>
      );
    } else if (this.state.checkDatas.length === 1) {
      if (this.state.checkDatas[0].basic === undefined) {
        return (
          <Aside>
            <NotSubmitApplicantHelper applicant={this.state.checkDatas[0]} />
          </Aside>
        );
      } else {
        return (
          <Aside>
            <ApplicantHelper
              applicant={this.state.checkDatas[0]}
              cancleFinalSubmit={this.cancleFinalSubmit} />
          </Aside>
        );
      }
    } else if (this.state.checkDatas.length > 1) {
      return (
        <Aside></Aside>
      );
    } else {
      return <div>Error</div>
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AsideHelper));