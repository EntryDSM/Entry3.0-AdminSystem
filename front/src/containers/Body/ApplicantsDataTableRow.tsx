import * as React from 'react';
import { TableRow, SelectStudent, ReceiptCode, Name, Region, Type, Payment, Receipt } from './local-styled/ApplicantsDataTableRow';
import gs from '../../global-styled';

interface Props {
  isSelect: boolean;
  receiptCode: string;
  name: string;
  region: string;
  type: string;
  isReceipt: boolean;
  isPayment: boolean;
}

const ApplicantsDataTableRow = ({ isSelect, receiptCode, name, region, type, isReceipt, isPayment }: Props) =>
  <TableRow>
    <SelectStudent><gs.CheckBox checked={isSelect} /></SelectStudent>
    <ReceiptCode>{receiptCode}</ReceiptCode>
    <Name>{name}</Name>
    <Region>{region}</Region>
    <Type>{type}</Type>
    <Receipt>{isReceipt ? 'O' : 'X'}</Receipt>
    <Payment>{isPayment ? 'O' : 'X'}</Payment>
  </TableRow>

export default ApplicantsDataTableRow;