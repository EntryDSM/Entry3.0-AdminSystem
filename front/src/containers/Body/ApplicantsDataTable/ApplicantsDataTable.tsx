import * as React from 'react';
import axios from 'axios';
import { Section, OverFlowContainer, DataTable } from './local-styled/ApplicantsDataTable';
import { connect } from 'react-redux';
import ApplicantsDataTableRow from './ApplicantsDataTableRow';
import ApplicantsDataTableHeader from './ApplicantsDataTableHeader';
import { Action } from 'redux';

interface State {
  data: {
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

class ApplicantsDataTable extends React.Component {
  state: State = {
    data: [],
    search: {
      text: '',
      isReceipt: false,
      isPayment: false
    }
  }

  // const config = {
  //   method: 'GET',
  //   url: '/applicants',
  //   params: {
  //     search: this.state.search.text,
  //     receipt: this.state.search.isReceipt,
  //     payment: this.state.search.isPayment
  //   },
  //   header: {
  //     Authorization: ''
  //   }
  // }

  componentDidMount = () => {
    this.setState({
      data: [
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
        {
          checked: false,
          isPayment: false,
          isReceipt: false,
          receiptCode: '001',
          region: '전국',
          type: '마이스터인재',
          name: '정근철'
        },
      ]
    })
  }

  // static getDerivedStateFromProps = (nextProps: ApplicantsData, prevState: State) => ({
  //   data: nextProps.data
  // });

  selectAllStudent = () => {
    this.setState((prevState: State) => ({
      data: prevState.data.map(std => ({ ...std, checked: !std.checked }))
    }));
  }

  render() {
    return (
      <Section>
        <ApplicantsDataTableHeader selectAllStudent={this.selectAllStudent} />
        <OverFlowContainer>
          <DataTable>
            {
              this.state.data.map(row =>
                <ApplicantsDataTableRow
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
  }
}

const mapStateToProps = (state: UpdateApplicantsDataAction) => ({
  data: state.data
});

export default connect(mapStateToProps)(ApplicantsDataTable);