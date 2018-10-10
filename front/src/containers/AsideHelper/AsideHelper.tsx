import React, { Component } from 'react';
import axios from 'axios';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import _ from 'lodash';
import { Aside } from './local-styled/AsideHelper';
import * as applicants from '../../modules/applicants/actionCreator';
import * as applicant from '../../modules/applicant/actionCreator';
import { changeMode } from '../../modules/aside/actionCreator';
import ApplicantsHelper from './ApplicantsHelper';
import ApplicantHelper from './ApplicantHelper';

class AsideHelper extends Component<any, any> {
  state = {
    applicants: [],
    applicant: {},
    search: '',
    csvData: ''
  }

  componentDidMount() {
    this.search('');
  }

  search = (searchText): void => {
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    this.props.applicantsActionCreators.updateApplicantsData(jwt, searchText);
  }

  inputSearch = ({ target }: Target): void => {
    this.setState({
      search: target.value
    });
    this.search(target.value);
  }

  getCSVFile = async () => {
    try {
      const response = await axios.post('http://52.79.60.204/api/applicants/excel', {
        users: this.props.applicants.map(applicant => applicant.user_id)
      }, {
        headers: {
          Authorization: `JWT ${this.props.cookies.cookies.accessToken}`
        }
      });
      const date = new Date();
      const filename = `지원자 현황 ${date.getFullYear()}년${date.getMonth() + 1}월${date.getDay()}일 ${date.getHours()}시${date.getMinutes()}분.csv`;
      const data = encodeURI(response.data);
      const link = document.createElement('a');
      link.setAttribute('href', `data:text/csv;charset=utf-8,\uFEFF${data}`);
      link.setAttribute('download', filename);
      link.click();
    } catch (err) {
      console.log(err);
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.applicants.length) {
      if (!prevState.applicants.length) {
        return {
          applicants: nextProps.applicants
        }
      } else {
        const diffs = [];
        for (let i = 0; i < nextProps.applicants.length; i++) {
          if (!_.isEqual(nextProps.applicants[i], prevState.applicants[i])) {
            diffs.push({ index: i, check: nextProps.applicants[i].isCheck });
          }
        }
        if (diffs.length) {
          if (diffs.length > 1) {
            // DEPRECATED
            // nextProps.changeMode('applicants');
          } else if (diffs.length === 1) {
            if (diffs[0].check) {
              nextProps.changeMode('applicant');
              const jwt = `JWT ${nextProps.cookies.cookies.accessToken}`;
              nextProps.applicantActionCreators.getApplicantData(jwt, nextProps.applicants[diffs[0].index].user_id);
              return {
                applicants: nextProps.applicants
              };
            } else {
              if (nextProps.aside.mode !== 'all') {
                nextProps.changeMode('all');
                return {
                  applicants: nextProps.applicants,
                  applicant: {}
                }
              }
            }
          } else {
            if (!_.isEqual(nextProps.applicant, prevState.applicant)) {
              return {
                applicant: nextProps.applicant
              }
            } else {
              nextProps.changeMode('all');
              return {
                applicant: {}
              }
            }
          }
        } else {
          if (!_.isEqual(nextProps.applicant, prevState.applicant)) {
            return {
              applicant: nextProps.applicant
            }
          }
        }
      }
    }

    return null;
  }

  render() {
    let helper = null;
    switch (this.props.aside.mode) {
      case 'all':
        helper = <ApplicantsHelper
                    searchText={this.state.search}
                    onSearch={this.search}
                    onSearchInput={this.inputSearch}
                    getCSVFile={this.getCSVFile} />
        break;
      case 'applicants':
        helper = ''
        break;
      case 'applicant':
        helper = <ApplicantHelper />
        break;
      default:
        helper = 'error';
        break;
    }
    return (
      <Aside>
        {helper}
      </Aside>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    applicants: state.applicants,
    applicant: state.applicant,
    aside: state.aside
  }
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  applicantsActionCreators: bindActionCreators(applicants, dispatch),
  applicantActionCreators: bindActionCreators(applicant, dispatch),
  changeMode: (mode: 'all'|'applicants'|'applicant') => dispatch(changeMode(mode))
});

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(AsideHelper));