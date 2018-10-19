import React, { Fragment, SFC } from 'react';
import { ApplicantInfoSectionHeader } from './local-styled/ApplicantHelper';
import ApplicantInfo from './ApplicantInfo';

interface Props {
  applicant: NotSubmitApplicantInfo;
}

const NotSubmitApplicantHelper: SFC<Props> = props => {
  return (
    <Fragment>
      <ApplicantInfoSectionHeader>지원자 정보(미제출)</ApplicantInfoSectionHeader>
      <ApplicantInfo header='이름' info={props.applicant.name} />
      <ApplicantInfo header='이메일' info={props.applicant.email} />
      <ApplicantInfo header='학교' info={props.applicant.school} />
      <ApplicantInfo header='전화번호' info={props.applicant.tel} />
      <ApplicantInfo header='보호자 전화번호' info={props.applicant.parent_tel} />
    </Fragment>
  );
}

export default NotSubmitApplicantHelper;