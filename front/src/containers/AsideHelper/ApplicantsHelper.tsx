import React, { Component, createElement } from 'react';
import { Aside } from './local-styled/AsideHelper';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { updateApplicantsDataAsync } from '../../modules/applicants/thunk';
import Search from './Search';
import FuncButton from './FuncButton';
import ExcelRequestButton from './ExcelRequestButton';

class ApplicantsHelper extends Component<any, any> {
  state = {
    search: '',
    csvData: ''
  }

  componentDidMount() {
    this.search('');
  }

  search = (searchText): void => {
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    this.props.updateApplicantsDataAsync(jwt, searchText);
  }

  inputSearch = ({ target }: Target): void => {
    this.setState({
      search: target.value
    });
    this.search(target.value);
  }

  getCSVFile = async () => {
    try {
      const response = await axios.post('http://52.79.60.204/applicants/excel', {
        users: this.props.applicants.map(applicant => applicant.user_id)
      }, {
        headers: {
          Authorization: `JWT ${this.props.cookies.cookies.accessToken}`
        }
      });
      const date = new Date();
      const filename = `지원자 현황 ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDay()} ${date.getHours()}:${date.getMinutes()}.csv`;
      const data = encodeURI(response.data);
      const link = document.createElement('a');
      link.setAttribute('href', `data:text/csv;charset=utf-8,\uFEFF${data}`);
      link.setAttribute('download', filename);
      link.click();
    } catch (e) {
      console.log('error');
      console.log(e);
    }
  }

  render() {
    return (
      <Aside>
        <Search
          searchText={this.state.search}
          onSearchInput={this.inputSearch}
          onSearch={this.search} />
        <FuncButton funcName='전체 지원자 정보(Excel) 다운로드' clickEvent={this.getCSVFile} />
        <FuncButton funcName='전체 지원자 수험번호 발급' clickEvent={() => {}} />
        <FuncButton funcName='전체 지원자 수험표 출력' clickEvent={() => {}} />
        <FuncButton funcName='전체 지원자 최종제출 취소' clickEvent={() => {}} />
      </Aside>
    );
  }
}

const mapStateToProps = (state: any) => ({
  applicants: state.applicants
});
const mapDispatchToProps = { updateApplicantsDataAsync };

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(ApplicantsHelper));