import React, { SFC } from 'react';
import { Wrapper, ExamTables, ExamTableWrapper, ExamTableHeader, ExamHost, ExamTableName, ExamTableSection, ApplicantPhotoWrapper, ApplicantPhoto, ExamTableInfoSection, ExamTableInfoWrapper, ExamTableInfoLabel, ExamTableInfo, ExamTableFooter } from './local-styled/ExamTable9RowsInPage';

interface Props {
  datas: Array<ExamTableRow>;
}

const ExamTable9RowsInPage: SFC<Props> = props =>
  <Wrapper>
    <ExamTables>
      {
        props.datas.map(data =>
          <ExamTableWrapper>
            <ExamTableHeader>
              <ExamHost>2018학년도 대덕소프트웨어마이스터고등학교</ExamHost>
              <ExamTableName>입학전형 수험표</ExamTableName>
            </ExamTableHeader>
            <ExamTableSection>
              <ApplicantPhotoWrapper>
                <ApplicantPhoto />
              </ApplicantPhotoWrapper>
              <ExamTableInfoSection>
                <ExamTableInfoWrapper>
                  <ExamTableInfoLabel>수험번호</ExamTableInfoLabel>
                  <ExamTableInfo>{data.exam_code}</ExamTableInfo>
                </ExamTableInfoWrapper>
                <ExamTableInfoWrapper>
                  <ExamTableInfoLabel>성명</ExamTableInfoLabel>
                  <ExamTableInfo>{data.name}</ExamTableInfo>
                </ExamTableInfoWrapper>
                <ExamTableInfoWrapper>
                  <ExamTableInfoLabel>출신중학교</ExamTableInfoLabel>
                  <ExamTableInfo>{data.middle_school}</ExamTableInfo>
                </ExamTableInfoWrapper>
                <ExamTableInfoWrapper>
                  <ExamTableInfoLabel>지역</ExamTableInfoLabel>
                  <ExamTableInfo>{data.region}</ExamTableInfo>
                </ExamTableInfoWrapper>
                <ExamTableInfoWrapper>
                  <ExamTableInfoLabel>전형유형</ExamTableInfoLabel>
                  <ExamTableInfo>{data.admission}</ExamTableInfo>
                </ExamTableInfoWrapper>
                <ExamTableInfoWrapper>
                  <ExamTableInfoLabel>접수번호</ExamTableInfoLabel>
                  <ExamTableInfo>{data.receipt_code}</ExamTableInfo>
                </ExamTableInfoWrapper>
              </ExamTableInfoSection>
            </ExamTableSection>
            <ExamTableFooter>
              대덕소프트웨어마이스터고등학교장
            </ExamTableFooter>
          </ExamTableWrapper>
        )
      }
    </ExamTables>
  </Wrapper>

export default ExamTable9RowsInPage;