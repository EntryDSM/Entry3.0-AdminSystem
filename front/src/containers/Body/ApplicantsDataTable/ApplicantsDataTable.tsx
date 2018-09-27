import React, { Component } from 'react';
import { Section, OverFlowContainer, DataTable } from './local-styled/ApplicantsDataTable';
import { connect } from 'react-redux';
import { checkApplicant } from '../../../modules/applicants/actionCreator';
import { withCookies } from 'react-cookie';
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

  
  checkApplicant = ({ target }: Target): void => {
    const checkApplicant = this.props.checkApplicant;
    checkApplicant(target.name);
  }

  componentDidMount = () => {
    if (this.props.cookies.cookies.length !== 0) {
      
    } else {

    }
  }
  
  static getDerivedStateFromProps = (nextProps: any, prevState: State) => ({
    applicantsData: nextProps.applicantsData.applicantsData
  })

  render() {
    console.log(this.props);
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

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(ApplicantsDataTable));