import styled from 'styled-components';
import gs from '../../../global-styled';

export const ApplicantsTableWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 710px;
  padding: 40px;
  box-sizing: border-box;
`
export const Table = styled.div`
  width: 100%;
  height: calc(100% - 55px);
  border: 1px solid ${gs.Color.skyBlue};
  border-top: 0;
  overflow: scroll;
`
export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid ${gs.Color.skyBlue};
  text-align: center;
`
export const TableHeader = TableRow.extend`
  border: 1px solid ${gs.Color.skyBlue};
  font-weight: bold;
`
export const CheckApplicant = styled.input.attrs({
  type: 'checkbox'
})``
export const CheckAll = CheckApplicant.extend`
`
export const CheckWrapper = styled.div`
  width: 7%;
  min-width: 40px;
`
export const ReceiptCode = styled.div`
  width: 12%;
  min-width: 75px;
`
export const Name = styled.div`
  width: 12%;
  min-width: 70px;
`
export const Region = styled.div`
  width: 12%;
  min-width: 70px;
`
export const Type = styled.div`
  width: 20%;
  min-width: 120px;
`
export const IsPayment = styled.div`
  width: 12%;
  min-width: 70px;
`
export const IsReceipt = styled.div`
  width: 12%;
  min-width: 70px;
`
export const CancleSubmit = styled.div`
  width: 13%;
  min-width: 70px;
`
export const CancleSubmitButton = styled.button`
`