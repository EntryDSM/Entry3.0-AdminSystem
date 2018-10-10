import React from 'react';
import { TableRow, CheckWrapper, CheckApplicant, ReceiptCode, Name, Region, Type, CancleSubmit, CancleSubmitButton, IsPayment, IsReceipt } from './local-styled/ApplicantsTable';

const ApplicantsTableRow = ({ rows, checkApplicant, checkPayment, checkReceipt }) =>
  rows.map(row =>
    <TableRow key={row.userId}>
      <CheckWrapper>
        <CheckApplicant
          id={row.user_id}
          onClick={event => checkApplicant(event)} />
      </CheckWrapper>
      <ReceiptCode>{row.receipt_code}</ReceiptCode>
      <Name>{row.name}</Name>
      <Region>{row.region}</Region>
      <Type>{row.admission}</Type>
      <IsPayment>
        <CheckApplicant
          id={row.user_id}
          checked={row.payment}
          onClick={event => checkPayment(event)} />
      </IsPayment>
      <IsReceipt>
        <CheckApplicant
          id={row.user_id}
          checked={row.receipt}
          onClick={event => checkReceipt(event)} />
      </IsReceipt>
      <CancleSubmit>
        <CancleSubmitButton>취소</CancleSubmitButton>
      </CancleSubmit>
    </TableRow>
  );

export default ApplicantsTableRow;