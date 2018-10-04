import React, { Component } from 'react';
import axios from 'axios';
import { Aside, AsideHeader } from './local-styled/AsideHelper';
import Search from './Search';
import ExcelRequestButton from './ExcelRequestButton';
import { connect } from 'react-redux';
import { updateApplicantsDataAsync } from '../../modules/applicants/thunk';
import { withCookies } from 'react-cookie';
import ApplicantsHelper from './ApplicantsHelper';

interface State {
  isReceipt: boolean;
  isPayment: boolean;
  search: string;
  conditions: {
    [k:string]: any;
  },
  csvData: string;
}

class AsideHelper extends Component<any, any> {
  state: State = {
    isReceipt: false,
    isPayment: false,
    search: '',
    conditions: {},
    csvData: ''
  }

  checkFilter = ({ target }: Target): void => {
    this.setState((prevState: State) => {
      if (target.name === 'receipt')
        return { isReceipt: !prevState.isReceipt };
      else
        return { isPayment: !prevState.isPayment };
    });
  }

  selectCondition = ({ target }: Target): void => {
  }

  searchInput = ({ target }: Target): void => {
    this.setState({
      search: target.value
    });
  }

  search = (): void => {
    const jwt = this.props.cookies.cookies.accessToken;
    this.props.updateApplicantsDataAsync(jwt, this.state.search);
  }

  getStudentsExcelFile = async () => {
    try {
      const response = await axios.post('http://52.79.60.204/applicants/excel', {
        users: this.props.applicantsData.map(applicant => applicant.user_id)
      }, {
        headers: {
          Authorization: `JWT ${this.props.cookies.cookies.accessToken}`
        }
      });
      this.setState({
        csvData: response.data
      })
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount = () => {
    this.search();
  }

  render() {
    switch (this.props.mode) {
      case 'applicants':
        return <ApplicantsHelper />
      default:
        return <div>Error</div>
    }
  }
}

const mapStateToProps = (state: any) => ({
  applicantsData: state.applicants,
  aside: state.aside
});
const mapDispatchToProps = { updateApplicantsDataAsync };

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(AsideHelper));