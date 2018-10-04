import React from 'react';
import { TableRow, CheckWrapper, CheckApplicant, ReceiptCode, Name, Region, Type, CancleSubmit, CancleSubmitButton, IsPayment, IsReceipt } from './local-styled/ApplicantsTable';

const ApplicantsTableRow = ({ rows }) =>
  rows.map(row =>
    <TableRow key={row.userId}>
      <CheckWrapper>
        <CheckApplicant />
      </CheckWrapper>
      <ReceiptCode>{row.receipt_code}</ReceiptCode>
      <Name>{row.name}</Name>
      <Region>{row.region}</Region>
      <Type>{row.admission}</Type>
      <IsPayment>
        <CheckApplicant checked={row.payment} />
      </IsPayment>
      <IsReceipt>
        <CheckApplicant checked={row.receipt} />
      </IsReceipt>
      <CancleSubmit>
        <CancleSubmitButton>취소</CancleSubmitButton>
      </CancleSubmit>
    </TableRow>
  );

export default ApplicantsTableRow;