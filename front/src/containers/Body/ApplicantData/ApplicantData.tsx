import * as React from 'react';
import { Section, Informations, IssueButton, InformationContainer, Information, InformationText, Summary, Image, Name, TypeAndRegion, InformationHeader, InformationName } from './local-styled/ApplicantData';

class ApplicantData extends React.Component {
  render() {
    return (
      <Section>
        <Informations>
          <Summary>
            <Image />
            <Name>정근철</Name>
            <TypeAndRegion>마이스터 인재 전형 / 전국</TypeAndRegion>
            <IssueButton>수험번호 발급</IssueButton>
          </Summary>
          <InformationContainer>
            <InformationHeader>학생 기본정보</InformationHeader>
            <Information>
              <InformationName>학생 이름</InformationName>
              <InformationText>정근철</InformationText>
            </Information>
            <Information>
              <InformationName>학생 연락처</InformationName>
              <InformationText>010-1234-5678</InformationText>
            </Information>
            <Information>
              <InformationName>주소</InformationName>
              <InformationText>(34111)대전광역시 유성구 가정북로 76(대덕소프트웨어마이스터고등학교 1911동 1002호)</InformationText>
            </Information>
            <InformationHeader>보호자 정보</InformationHeader>
            <Information>
              <InformationName>보호자 성함</InformationName>
              <InformationText>안영숙</InformationText>
            </Information>
            <Information>
              <InformationName>보호자 연락처</InformationName>
              <InformationText>010-1234-5678</InformationText>
            </Information>
            <InformationHeader>기본 학적사항</InformationHeader>
            <Information>
              <InformationName>중학교</InformationName>
              <InformationText>인하대학교사범대부속중학교</InformationText>
            </Information>
            <Information>
              <InformationName>학년-반-번호</InformationName>
              <InformationText>20111</InformationText>
            </Information>
            <Information>
              <InformationName>졸업년도</InformationName>
              <InformationText>2017</InformationText>
            </Information>
            <Information>
              <InformationName>수험번호</InformationName>
              <InformationText>발급안됨</InformationText>
            </Information>
          </InformationContainer>
        </Informations>
      </Section>
    );
  }
}

export default ApplicantData;