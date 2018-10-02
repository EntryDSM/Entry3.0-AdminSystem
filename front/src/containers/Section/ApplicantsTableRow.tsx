import React from 'react';
import { TableRow, CheckWrapper, CheckApplicant, ReceiptCode, Name, Region, Type, CancleSubmit, CancleSubmitButton, IsPayment, IsReceipt } from './local-styled/ApplicantsTable';

const ApplicantsTableRow = ({ rows }) =>
  rows.map(row =>
    <TableRow key={row.userId}>
      <CheckWrapper>
        <CheckApplicant />
      </CheckWrapper>
      <ReceiptCode>{row.receiptCode}</ReceiptCode>
      <Name>{row.name}</Name>
      <Region>{row.region}</Region>
      <Type>{row.type}</Type>
      <IsPayment><CheckApplicant checked={row.isPayment} /></IsPayment>
      <IsReceipt><CheckApplicant checked={row.isReceipt} /></IsReceipt>
      <CancleSubmit>
        <CancleSubmitButton>취소</CancleSubmitButton>
      </CancleSubmit>
    </TableRow>
  );

export default ApplicantsTableRow;