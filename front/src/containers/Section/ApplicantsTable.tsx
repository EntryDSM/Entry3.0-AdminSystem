import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicantsTableWrapper, Table } from './local-styled/ApplicantsTable';
import ApplicantsTableHeader from './ApplicantsTableHeader';
import ApplicantsTableRow from './ApplicantsTableRow';
import { withCookies } from 'react-cookie';
import * as applicant from '../../modules/applicant/actionCreator';
import { checkApplicant } from '../../modules/applicants/actionCreator';

class ApplicantsTable extends Component<any, any> {
  checkPayment = ({ target }: Target) => {
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    this.props.applicantActionCreators.checkPayment(jwt, target.id);
  }

  checkReceipt = ({ target }: Target) => {
    const jwt = `JWT ${this.props.cookies.cookies.accessToken}`;
    this.props.applicantActionCreators.checkReceipt(jwt, target.id);
  }

  checkApplicant = ({ target }: Target) => {
    this.props.checkApplicant(target.id);
  }

  render() {
    return (
      <ApplicantsTableWrapper>
        <ApplicantsTableHeader />
        <Table>
          <ApplicantsTableRow
            rows={this.props.applicants}
            checkApplicant={this.checkApplicant}
            checkPayment={this.checkPayment}
            checkReceipt={this.checkReceipt} />
        </Table>
      </ApplicantsTableWrapper>
    );
  }
}

const mapStateToProps = (state: any) => ({
  applicants: state.applicants
});
const mapDispatchToProps = (dispatch: any) => ({
  applicantActionCreators: bindActionCreators(applicant, dispatch),
  checkApplicant: (userId: string) => dispatch(checkApplicant(userId))
});

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(ApplicantsTable));