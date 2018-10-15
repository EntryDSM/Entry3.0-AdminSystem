import React, { Component } from 'react';
import axios from 'axios';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import _ from 'lodash';
import { Aside } from './local-styled/AsideHelper';
import * as applicants from '../../modules/applicants/actionCreator';
import * as checks from '../../modules/checks/actionCreator';
import * as exam from '../../modules/exam/actionCreator';
import ApplicantsHelper from './ApplicantsHelper';
import ApplicantHelper from './ApplicantHelper';
import NotSubmitApplicantHelper from './NotSubmitApplicantHelper';

class AsideHelper extends Component<any, any> {
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
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    this.props.applicantsActionCreators.updateApplicantsData(jwt, searchText);
  }

  inputSearch = ({ target }: Target): void => {
    this.setState({
      search: target.value
    });
    this.search(target.value);
  }

  getCSVFile = () => {
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    this.props.applicantsActionCreators.requestExcel(jwt);
  }

  issuingExaminationNumber = async () => {
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    console.log(this.props);
    this.props.examActionCreators.issuingExaminationNumber(jwt);
  }

  issuingAdmissionNumber = async ({ target }: Target) => {
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    try {
      await axios.patch(`https://admin-api.entrydsm.hs.kr:80/api/applicants/details/exam_code/${target.id}`, null, {
        headers: {
          Authorization: jwt
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  printExamTable = async () => {
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    this.props.examActionCreators.requestExamTable(jwt);
  }

  cancleFinalSubmit = async ({ target }: Target) => {
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    await axios.patch(`https://admin-api.entrydsm.hs.kr:80/api/applicants/details/final_submit/${target.id}`,
      null,
      {
        headers: {
          Authorization: jwt
        }
      }
    )
    this.search('');
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
            issuingExaminationNumber={this.issuingExaminationNumber} />
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
              onIssuingAdmissionNumber={this.issuingAdmissionNumber}
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

const mapStateToProps = (state: any) => ({
  checks: state.checks,
  aside: state.aside
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  applicantsActionCreators: bindActionCreators(applicants, dispatch),
  checksActionCreators: bindActionCreators(checks, dispatch),
  examActionCreators: bindActionCreators(exam, dispatch)
});

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(AsideHelper));