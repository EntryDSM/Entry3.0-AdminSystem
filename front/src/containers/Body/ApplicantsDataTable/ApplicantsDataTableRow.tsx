import * as React from 'react';
import { TableRow, SelectStudent, ReceiptCode, Name, Region, Type, Payment, Receipt } from './local-styled/ApplicantsDataTableRow';
import gs from '../../../global-styled';

interface Props {
  userId: string;
  isSelect: boolean;
  receiptCode: string;
  name: string;
  region: string;
  type: string;
  isReceipt: boolean;
  isPayment: boolean;
  selectStudent: Function;
}

const ApplicantsDataTableRow = ({ userId, isSelect, receiptCode, name, region, type, isReceipt, isPayment, selectStudent }: Props) =>
  <TableRow id={`${userId}`} onClick={() => selectStudent()}>
    <SelectStudent><gs.CheckBox checked={isSelect} /></SelectStudent>
    <ReceiptCode>{receiptCode}</ReceiptCode>
    <Name>{name}</Name>
    <Region>{region}</Region>
    <Type>{type}</Type>
    <Receipt>{isReceipt ? 'O' : 'X'}</Receipt>
    <Payment>{isPayment ? 'O' : 'X'}</Payment>
  </TableRow>

export default ApplicantsDataTableRow;