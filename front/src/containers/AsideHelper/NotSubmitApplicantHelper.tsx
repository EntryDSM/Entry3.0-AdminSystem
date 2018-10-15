import React, { Fragment } from 'react';
import { ApplicantInfoSectionHeader } from './local-styled/ApplicantHelper';
import ApplicantInfo from './ApplicantInfo';

const NotSubmitApplicantHelper = ({ applicant }) => {
  return (
    <Fragment>
      <ApplicantInfoSectionHeader>지원자 정보(미제출)</ApplicantInfoSectionHeader>
      <ApplicantInfo header='이름' info={applicant.name} />
      <ApplicantInfo header='이메일' info={applicant.email} />
      <ApplicantInfo header='학교' info={applicant.school} />
      <ApplicantInfo header='전화번호' info={applicant.tel} />
      <ApplicantInfo header='보호자 전화번호' info={applicant.parent_tel} />
    </Fragment>
  );
}

export default NotSubmitApplicantHelper;