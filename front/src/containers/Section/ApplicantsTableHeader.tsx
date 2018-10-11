import React from 'react';
import { TableHeader, CheckWrapper, CheckAll, ReceiptCode, Name, Region, Type, CancleSubmit, IsPayment, IsReceipt } from './local-styled/ApplicantsTable';

const ApplicantsTableHeader = () =>
  <TableHeader>
    <CheckWrapper>
      <CheckAll></CheckAll>
    </CheckWrapper>
    <ReceiptCode>접수번호</ReceiptCode>
    <Name>이름</Name>
    <Region>지역</Region>
    <Type>전형</Type>
    <IsPayment>응시료<br />납부여부</IsPayment>
    <IsReceipt>서류도착<br />확인여부</IsReceipt>
    <CancleSubmit>지원현황</CancleSubmit>
  </TableHeader>

export default ApplicantsTableHeader;