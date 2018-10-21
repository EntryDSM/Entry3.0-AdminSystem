import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  width: calc(29.7cm + 42mm);
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 50px 0;
  background-color: #ccc;
  border: 1px solid #ddd;
`
export const PrintArea = styled.div`
  @media print{
    @page {
      size: A4 landscape;
      page-break-after: auto;
    }
  }
`
export const Functions = styled.div`
  position: relative;
  width: calc(21cm + 100px);
  height: 50px;
  margin: auto;
  margin-bottom: 20px;
`
const FunctionButton = styled.button`
  position: aboluste;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 50px;
  background: none;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`
export const PrintButton = FunctionButton.extend`
  left: 0;

`
export const DownloadPDFButton = FunctionButton.extend`
  right: 0;
`