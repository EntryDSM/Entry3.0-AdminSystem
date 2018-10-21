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
export const PrintButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100px;
  height: 50px;
  background: none;
  font-size: 15px;
`
export const DownloadPDFButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 100px;
  height: 50px;
  background: none;
  font-size: 15px;
`