import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 29.7cm;
  height: 20cm;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #000;
  page-break-after: always;
`
export const ExamTables = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(25.5cm + 60px);
  height: calc(17.4cm + 70px);
`
export const ExamTableWrapper = styled.div`
  float: left;
  width: 8.5cm;
  margin: 10px;
`
export const ExamTableHeader = styled.header`
  width: 100%;
  height: 0.8cm;
  border: 1px solid #000;
`
export const ExamHost = styled.p`
  font-size: 7px;
  text-align: center;
  margin: 0;
  margin-top: 3px;
`
export const ExamTableName = styled.p`
  font-size: 12px;
  text-align: center;
  margin: 0;
  margin-top: 2px;
`
export const ExamTableSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4cm;
  margin: 0.1cm 0;
  border: 1px solid #000;
`
export const ApplicantPhotoWrapper = styled.div`
  width: 3cm;
  height: 4cm;
  border-right: 1px solid #000;
`
export const ApplicantPhoto = styled.img`
`
export const ExamTableInfoSection = styled.div`
  width: calc(100% - 3cm);
  height: 100%;

  &:last-child {
    border: 0;
  }
`
export const ExamTableInfoWrapper = styled.div`
  display: flex;
  height: 0.6445cm;
  border-bottom: 1px solid #000;
  font-size: 8px;
`
export const ExamTableInfoLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2cm;
  border-right: 1px solid #000;
`
export const ExamTableInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 2cm);
`
export const ExamTableFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 0.8cm;
  border: 1px solid #000;
  font-size: 12px;
`