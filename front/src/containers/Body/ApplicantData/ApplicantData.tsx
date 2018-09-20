import * as React from 'react';
import Information from './Information';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import { Section, Informations, IssueButton, InformationContainer, Summary, Image, Name, TypeAndRegion, InformationHeader } from './local-styled/ApplicantData';

type State = {
  applicantName: string,
  applicantPhone: string,
  address: string,
  protectorName: string,
  protectorPhone: string,
  schoolName: string,
  class: number,
  grade: number,
  number: number,
  graduateYear: string,
  examCode: string
}

class ApplicantData extends React.Component <any, any> {
  state: State = {
    applicantName: '',
    applicantPhone: '',
    address: '',
    protectorName: '',
    protectorPhone: '',
    schoolName: '',
    class: 0,
    grade: 0,
    number: 0,
    graduateYear: '',
    examCode: ''
  }

  componentDidMount = () => {
    const userId = '';
    axios.get(`/applicants/details/information/${userId}`, {
      headers: {
        Authorization: this.props.cookies
      }
    }).then(res => {
      this.setState({
        applicantName: res.data.basic.name,
        applicantPhone: res.data.basic.tel,
        address: res.data.basic.address,
        protectorName: res.data.parent.name,
        protectorPhone: res.data.parent.tel,
        schoolName: res.data.academic.school_name,
        class: res.data.academic.class,
        grade: res.data.academic.grade,
        number: res.data.academic.number,
        graduateYear: '',
        examCode: res.data.exam_code
      });
    }).catch(err => {
      console.log(err);
    });
  }

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
            <Information name='학생 이름' text='정근철' />
            <Information name='학생 연락처' text='010-1234-5678' />
            <Information name='주소' text='(34111)대전광역시 유성구 가정북로 76(대덕소프트웨어마이스터고등학교 1911동 1002호)' />
            <InformationHeader>보호자 정보</InformationHeader>
            <Information name='보호자 성함' text='안영숙' />
            <Information name='보호자 연락처' text='010-1234-5678' />
            <InformationHeader>기본 학적사항</InformationHeader>
            <Information name='중학교' text='인하대학교사범대부속중학교' />
            <Information name='학년-반-번호' text='20111' />
            <Information name='졸업년도' text='2017' />
            <Information name='수험번호' text='발급안됨' />
          </InformationContainer>
        </Informations>
      </Section>
    );
  }
}

export default ApplicantData;