import * as React from 'react';
import axios from 'axios';
import { Section, OverFlowContainer, DataTable } from './local-styled/ApplicantsDataTable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loading from './Loading';
import ApplicantsDataTableRow from './ApplicantsDataTableRow';
import ApplicantsDataTableHeader from './ApplicantsDataTableHeader';

interface State {
  applicantsData: {
    userId: string;
    checked: boolean;
    isPayment: boolean;
    isReceipt: boolean;
    receiptCode: string;
    region: string;
    type: string;
    name: string;
  }[];
  search: {
    text: string;
    isReceipt: boolean;
    isPayment: boolean;
  };
}

class ApplicantsDataTable extends React.Component <any, any> {
  state: State = {
    applicantsData: [],
    search: {
      text: '',
      isReceipt: false,
      isPayment: false
    }
  }

  static getDerivedStateFromProps = (nextProps: any, prevState: State) => {
    console.log('[ApplicantsDataTable] - getDerivedStateFromProps');
    console.log(nextProps);
    return {
      applicantsData: nextProps.applicantsData.applicantsData
    }
  }

  selectAllStudent = () => {
    this.setState((prevState: State) => ({
      applicantsData: prevState.applicantsData.map(std => ({ ...std, checked: !std.checked }))
    }));
  }

  selectStudent = ({ target }: Target) => {
    this.props.history.push(`/applicants/details/grade/${target.id}`);
  }

  render() {
    console.log(this.props);
    if (this.props.applicantsData.applicantsData) {
      return (
        <Section>
          <ApplicantsDataTableHeader selectAllStudent={this.selectAllStudent} />
          <OverFlowContainer>
            <DataTable>
              {
                this.state.applicantsData.map(row =>
                  <ApplicantsDataTableRow
                    key={`key_${row.receiptCode}`}
                    userId={row.userId}
                    isSelect={row.checked}
                    receiptCode={row.receiptCode}
                    name={row.name}
                    region={row.region}
                    type={row.type}
                    isReceipt={row.isReceipt}
                    isPayment={row.isPayment}
                    selectStudent={this.selectStudent} />
                )
              }
            </DataTable>
          </OverFlowContainer>
        </Section>
      );
    } else {
      return <Loading />
    }
  }
}

const mapStateToProps = (state: any) => {
  console.log('map state to props');
  console.log(state);
  return {
    applicantsData: state.applicants
  }
};

export default connect(mapStateToProps)(ApplicantsDataTable);