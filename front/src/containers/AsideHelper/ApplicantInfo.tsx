import React, { Fragment } from 'react';
import { ApplicantInfoWrapper, ApplicantInfoContent, ApplicantInfoHeader } from './local-styled/ApplicantHelper';

const ApplicantInfo = ({ header, info }) =>
  <ApplicantInfoWrapper>
    <ApplicantInfoHeader>{header}</ApplicantInfoHeader>
    <ApplicantInfoContent>{info}</ApplicantInfoContent>
  </ApplicantInfoWrapper>

export default ApplicantInfo;