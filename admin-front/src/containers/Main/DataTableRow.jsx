import React from 'react';
import styled from 'styled-components';

const TableRow = styled.tr`
  display: table;
  width: 100%;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`

const TableData = styled.td`
  border-top: 1px solid rgb(160, 195, 212);
  color: rgb(160, 195, 212);
  text-align: center;
  white-space: nowrap;
`

const Checkbox = TableData.extend`
  width: 10%;
  min-width: 75px;
`

const ReceiptCode = TableData.extend`
  width: 20%;
  min-width: 60px;
`

const Name = TableData.extend`
  width: 25%;
`

const Type = TableData.extend`
  width: 25%
`

const DataTableRow = ({ data }) =>
  <TableRow>
    <Checkbox>
      <input type='checkbox' />
    </Checkbox>
    <ReceiptCode>{data.num}</ReceiptCode>
    <Name>{data.name}</Name>
    <Type>{data.type}</Type>
    <Checkbox>{data.isReceive ? 'O' : 'X'}</Checkbox>
    <Checkbox>{data.isPayment ? 'O' : 'X'}</Checkbox>
  </TableRow>

export default DataTableRow;