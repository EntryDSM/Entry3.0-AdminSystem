import React, { SFC } from 'react';
import { ApplicantInfoWrapper, ApplicantInfoContent, ApplicantInfoHeader } from './local-styled/ApplicantHelper';

interface Props {
  header: string;
  info: string;
}

const ApplicantInfo: SFC<Props> = props =>
  <ApplicantInfoWrapper>
    <ApplicantInfoHeader>{props.header}</ApplicantInfoHeader>
    <ApplicantInfoContent>{props.info}</ApplicantInfoContent>
  </ApplicantInfoWrapper>

export default ApplicantInfo;