import React, { Component } from 'react';
import { Section, OverFlowContainer, DataTable } from './local-styled/ApplicantsDataTable';
import { connect } from 'react-redux';
import { checkApplicant } from '../../../modules/applicants/actionCreator';
import Loading from './Loading';
import ApplicantsDataTableRow from './ApplicantsDataTableRow';
import ApplicantsDataTableHeader from './ApplicantsDataTableHeader';

interface State {
  search: {
    text: string;
    isReceipt: boolean;
    isPayment: boolean;
  };
}

class ApplicantsDataTable extends Component<any, any> {
  state: State = {
    search: {
      text: '',
      isReceipt: false,
      isPayment: false
    }
  }

  static getDerivedStateFromProps = (nextProps: any, prevState: State) => ({
    applicantsData: nextProps.applicantsData.applicantsData
  });

  checkApplicant = ({ target }: Target): void => {
    const checkApplicant = this.props.checkApplicant;
    checkApplicant(target.name);
  }

  render() {
    if (this.props.applicantsData.length !== 0) {
      return (
        <Section>
          <ApplicantsDataTableHeader/>
          <OverFlowContainer>
            <DataTable>
              {
                this.props.applicantsData.map(row =>
                  <ApplicantsDataTableRow
                    key={`key_${row.user_id}`}
                    userId={row.user_id}
                    receiptCode={row.receipt_code}
                    name={row.name}
                    region={row.region}
                    admission={row.admission}
                    isSelect={row.isSelect}
                    isReceipt={row.isReceipt}
                    isPayment={row.isPayment}
                    checkApplicant={this.checkApplicant} />
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

const mapStateToProps = (state: any) => ({
  applicantsData: state.applicants
});

const mapDispatchToProps = (dispatch: any) => ({
  checkApplicant: (userId: string) => dispatch(checkApplicant(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsDataTable);