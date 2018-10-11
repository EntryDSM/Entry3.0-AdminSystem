import React from 'react';
import { TableRow, CheckWrapper, CheckApplicant, ReceiptCode, Name, Region, Type, CancleSubmit, CancleSubmitButton, IsPayment, IsReceipt } from './local-styled/ApplicantsTable';

const ApplicantsTableRow = ({ rows, checkApplicant, checkPayment, checkReceipt }) =>
  rows.map(row =>
    <TableRow key={row.user_id}>
      <CheckWrapper>
        <CheckApplicant
          id={row.user_id}
          onChange={event => checkApplicant(event)}
          checked={row.isCheck} />
      </CheckWrapper>
      <ReceiptCode>{row.receipt_code}</ReceiptCode>
      <Name>{row.name}</Name>
      <Region>{row.region}</Region>
      <Type>{row.admission}</Type>
      <IsPayment>
        <CheckApplicant
          id={row.user_id}
          checked={row.payment}
          onChange={event => checkPayment(event)} />
      </IsPayment>
      <IsReceipt>
        <CheckApplicant
          id={row.user_id}
          checked={row.receipt}
          onChange={event => checkReceipt(event)} />
      </IsReceipt>
      <CancleSubmit>
        {row.is_submit ? '완료' : '작성중'}
      </CancleSubmit>
    </TableRow>
  );

export default ApplicantsTableRow;