import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicantsTableWrapper, Table } from './local-styled/ApplicantsTable';
import ApplicantsTableHeader from './ApplicantsTableHeader';
import ApplicantsTableRow from './ApplicantsTableRow';

class ApplicantsTable extends Component<any, any> {
  render() {
    return (
      <ApplicantsTableWrapper>
        <ApplicantsTableHeader />
        <Table>
          <ApplicantsTableRow rows={this.props.applicants} />
        </Table>
      </ApplicantsTableWrapper>
    );
  }
}

const mapStateToProps = (state: any) => ({
  applicants: state.applicants
});

export default connect(mapStateToProps)(ApplicantsTable);