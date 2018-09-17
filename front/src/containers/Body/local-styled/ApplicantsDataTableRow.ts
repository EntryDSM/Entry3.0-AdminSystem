import styled from 'styled-components';
import gs from '../../../global-styled';

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${gs.Color.skyBlue};

  &:hover {
    cursor: pointer;
  }
`

const TableHeader = TableRow.extend`
  border: 1px solid ${gs.Color.skyBlue};
`

const TableData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`

const SelectStudent = TableData.extend`
  width: 7%;
`

const ReceiptCode = TableData.extend`
  width: 13%;
`

const Name = TableData.extend`
  width: 20%;
`

const Region = TableData.extend`
  width: 10%;
`

const Type = TableData.extend`
  width: 20%;
`

const Payment = TableData.extend`
  width: 15%;
`

const Receipt = TableData.extend`
  width: 15%;
`

export { TableRow, TableHeader, SelectStudent, ReceiptCode, Name, Region, Type, Payment, Receipt };