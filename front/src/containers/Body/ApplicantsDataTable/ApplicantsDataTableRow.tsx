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
  selectStudent: Function;
}

const ApplicantsDataTableRow = ({ userId, isSelect, receiptCode, name, region, admission, isReceipt, isPayment, checkApplicant, selectStudent }: Props) =>
  <TableRow id={userId} onClick={() => selectStudent()}>
    <SelectStudent><gs.CheckBox name={userId} checked={isSelect} onClick={event => checkApplicant(event)} /></SelectStudent>
    <ReceiptCode>{receiptCode}</ReceiptCode>
    <Name>{name}</Name>
    <Region>{region}</Region>
    <Admission>{admission}</Admission>
    <Receipt><gs.CheckBox name={`${userId}_receipt`} checked={isReceipt} /></Receipt>
    <Payment><gs.CheckBox name={`${userId}_payment`} checked={isPayment} /></Payment>
  </TableRow>

export default ApplicantsDataTableRow;