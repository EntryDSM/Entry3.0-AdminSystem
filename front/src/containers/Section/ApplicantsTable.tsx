import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { ApplicantsTableWrapper, Table } from './local-styled/ApplicantsTable';
import ApplicantsTableHeader from './ApplicantsTableHeader';
import ApplicantsTableRow from './ApplicantsTableRow';
import { Cookies } from 'react-cookie';
import * as checks from '../../modules/checks/actionCreator';

class ApplicantsTable extends Component<any, any> {
  checkPayment = ({ target }: Target) => {
    const jwt = new Cookies().get('accessToken');
    this.props.checksActionCreators.checkPayment(jwt, target.id);
  }

  checkReceipt = ({ target }: Target) => {
    const jwt = new Cookies().get('accessToken');
    this.props.checksActionCreators.checkReceipt(jwt, target.id);
  }

  checkApplicant = ({ target }: Target) => {
    const jwt = new Cookies().get('accessToken');
    this.props.checksActionCreators.checkApplicant(jwt, target.id);
  }

  render() {
    if (new Cookies().get('accessToken') === undefined) {
      return <Redirect to='/login' />
    } else {
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
}

const mapStateToProps = (state: any) => ({
  applicants: state.applicants
});
const mapDispatchToProps = (dispatch: any) => ({
  checksActionCreators: bindActionCreators(checks, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsTable);