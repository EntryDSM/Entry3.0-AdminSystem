import React from 'react';
import { TableRow, SelectStudent, ReceiptCode, Name, Region, Admission, Payment, Receipt } from './local-styled/ApplicantsDataTableRow';
import gs from '../../../global-styled';

interface Props {
  userId: string;
  isSelect: boolean;
  receiptCode: string;
  name: string;
  region: string;
  admission: string;
  isReceipt: boolean;
  isPayment: boolean;
  checkApplicant: Function;
}

const ApplicantsDataTableRow = ({ userId, isSelect, receiptCode, name, region, admission, isReceipt, isPayment, checkApplicant }: Props) =>
  <TableRow id={userId}>
    <SelectStudent><gs.CheckBox name={userId} checked={isSelect} onClick={event => checkApplicant(event)} /></SelectStudent>
    <ReceiptCode>{receiptCode}</ReceiptCode>
    <Name>{name}</Name>
    <Region>{region}</Region>
    <Admission>{admission}</Admission>
    <Receipt>{isReceipt ? 'O' : 'X'}</Receipt>
    <Payment>{isPayment ? 'O' : 'X'}</Payment>
  </TableRow>

export default ApplicantsDataTableRow;