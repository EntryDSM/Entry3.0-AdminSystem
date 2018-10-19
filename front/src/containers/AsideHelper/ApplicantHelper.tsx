import React, { Fragment, SFC } from 'react';
import { ApplicantHelperHeader, ApplicantInfoSectionHeader } from './local-styled/ApplicantHelper';
import FuncButton from './FuncButton';
import ApplicantInfo from './ApplicantInfo';

interface Props {
  applicant: SubmitApplicantInfo;
  cancleFinalSubmit(event): void;
}

const ApplicantHelper: SFC<Props> = ({ applicant, cancleFinalSubmit }) => {
  const { address, name: basicName, tel: basicTel } = applicant.basic;
  const { name: parentName, tel: parentTel } = applicant.parent;
  const { school_name, student_grade, student_class, student_number, graduate_year } = applicant.academic;

  return (
    <Fragment>
      <ApplicantHelperHeader>지원자 정보</ApplicantHelperHeader>
      <ApplicantInfoSectionHeader>학생 기본정보</ApplicantInfoSectionHeader>
      <ApplicantInfo header='학생 이름' info={basicName} />
      <ApplicantInfo header='학생 연락처' info={basicTel} />
      <ApplicantInfo header='주소' info={address} />
      <ApplicantInfoSectionHeader>보호자 정보</ApplicantInfoSectionHeader>
      <ApplicantInfo header='보호자 성함' info={parentName} />
      <ApplicantInfo header='보호자 연락처' info={parentTel} />
      <ApplicantInfoSectionHeader>기본 학적사항</ApplicantInfoSectionHeader>
      <ApplicantInfo header='중학교' info={school_name} />
      <ApplicantInfo header='학년-반-번호' info={`${student_grade}-${student_class}-${student_number}`} />
      <ApplicantInfo header='졸업년도' info={graduate_year} />
      <ApplicantInfo header='수험번호' info={applicant.exam_code} />
      <FuncButton funcName='수험표 출력' clickEvent={() => {}} />
      <FuncButton funcName='최종제출 취소' id={applicant.user_id} clickEvent={cancleFinalSubmit} />
    </Fragment>   
  );
}

export default ApplicantHelper;