import React, { Component } from 'react';
import { ApplicantsTableWrapper, Table } from './local-styled/ApplicantsTable';
import ApplicantsTableHeader from './ApplicantsTableHeader';
import ApplicantsTableRow from './ApplicantsTableRow';

class ApplicantsTable extends Component {
  render() {
    return (
      <ApplicantsTableWrapper>
        <ApplicantsTableHeader />
        <Table>
          <ApplicantsTableRow rows={[
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "마이스터 인재",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },           {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },           {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
            {
              name: "정경서",
              isPayment: true,
              isReceipt: true,
              receiptCode: 111,
              region: "전국",
              type: "normal",
              userId: "flouie74"
            },
          ]} />
        </Table>
      </ApplicantsTableWrapper>
    );
  }
}

export default ApplicantsTable;