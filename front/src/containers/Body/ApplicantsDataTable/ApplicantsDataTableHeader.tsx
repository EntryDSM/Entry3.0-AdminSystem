import React from 'react';
import { TableHeader, SelectStudent, ReceiptCode, Name, Region, Admission, Payment, Receipt } from './local-styled/ApplicantsDataTableRow';
import gs from '../../../global-styled';

const ApplicantsDataTableHeader = () =>
  <TableHeader>
    <SelectStudent><gs.CheckBox /></SelectStudent>
    <ReceiptCode>접수번호</ReceiptCode>
    <Name>이름</Name>
    <Region>지역</Region>
    <Admission>전형</Admission>
    <Receipt>원서도착</Receipt>
    <Payment>전형료납부</Payment>
  </TableHeader>

export default ApplicantsDataTableHeader;