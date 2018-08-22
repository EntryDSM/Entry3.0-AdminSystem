import React from 'react';
import styled from 'styled-components';

const TableHeaderWrapper = styled.thead`
  display: table;
  width: 100%;
`

const TableRow = styled.tr`
  height: 50px;
`

const TableHeader = styled.th`
  font-weight: normal;
  color: rgb(160, 195, 212);
  text-align: center;
`

const Checkbox = TableHeader.extend`
  width: 10%;
  min-width: 75px;
`

const ReceiptCode = TableHeader.extend`
  width: 20%;
  min-width: 60px;
`

const Name = TableHeader.extend`
  width: 25%;
`

const Type = TableHeader.extend`
  width: 25%
`

const DataTableHeader = () =>
  <TableHeaderWrapper>
    <TableRow>
      <Checkbox>
        <input type="checkbox" />
      </Checkbox>
      <ReceiptCode>접수번호</ReceiptCode>
      <Name>이름</Name>
      <Type>전형</Type>
      <Checkbox>원서도착</Checkbox>
      <Checkbox>전형료 납부</Checkbox>
    </TableRow>
  </TableHeaderWrapper>

export default DataTableHeader;