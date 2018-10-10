import React, { Fragment } from 'react';
import { ApplicantHelperHeader, ApplicantInfoSectionHeader } from './local-styled/ApplicantHelper';
import ApplicantInfo from './ApplicantInfo';

const ApplicantHelper = () =>
  <Fragment>
    <ApplicantHelperHeader>지원자 정보</ApplicantHelperHeader>
    <ApplicantInfoSectionHeader>학생 기본정보</ApplicantInfoSectionHeader>
    <ApplicantInfo header='학생 이름' info='' />
    <ApplicantInfo header='학생 연락처' info='' />
    <ApplicantInfo header='주소' info='' />
    <ApplicantInfoSectionHeader>보호자 정보</ApplicantInfoSectionHeader>
    <ApplicantInfo header='보호자 성함' info='' />
    <ApplicantInfo header='보호자 연락처' info='' />
    <ApplicantInfoSectionHeader>기본 학적사항</ApplicantInfoSectionHeader>
    <ApplicantInfo header='중학교' info='' />
    <ApplicantInfo header='학년-반-번호' info='' />
    <ApplicantInfo header='졸업년도' info='' />
    <ApplicantInfo header='수험번호' info='' />
  </Fragment>   

export default ApplicantHelper;