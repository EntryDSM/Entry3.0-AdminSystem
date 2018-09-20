import * as React from 'react';
import axios from 'axios';
import { Section, OverFlowContainer, DataTable } from './local-styled/ApplicantsDataTable';
import { connect } from 'react-redux';
import Loading from './Loading';
import ApplicantsDataTableRow from './ApplicantsDataTableRow';
import ApplicantsDataTableHeader from './ApplicantsDataTableHeader';

interface State {
  applicantsData: {
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

  componentDidMount = () => {

  }

  static getDerivedStateFromProps = (nextProps: ApplicantsData, prevState: State) => ({
    data: nextProps.data
  });

  selectAllStudent = () => {
    this.setState((prevState: State) => ({
      data: prevState.applicantsData.map(std => ({ ...std, checked: !std.checked }))
    }));
  }

  render() {
    console.log(this.state);
    if (this.state.applicantsData.length !== 0) {
      return (
        <Section>
          <ApplicantsDataTableHeader selectAllStudent={this.selectAllStudent} />
          <OverFlowContainer>
            <DataTable>
              {
                this.state.applicantsData.map(row =>
                  <ApplicantsDataTableRow
                    key={`key_${row.receiptCode}`}
                    isSelect={row.checked}
                    receiptCode={row.receiptCode}
                    name={row.name}
                    region={row.region}
                    type={row.type}
                    isReceipt={row.isReceipt}
                    isPayment={row.isPayment} />
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

const mapStateToProps = (state: UpdateApplicantsDataAction) => ({
  data: state.data
});

export default connect(mapStateToProps)(ApplicantsDataTable);