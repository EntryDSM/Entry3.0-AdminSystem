import React, { SFC } from 'react';
import { ConditionWrapper, ConditionName, ConditionLabel, ConditionCheckBox } from './local-styled/SearchCondition';

interface Props {
  
}

const SearchCondition: SFC<Props> = () =>
  <ConditionWrapper>
    <ConditionName>지역</ConditionName>
    <ConditionLabel>전국</ConditionLabel>
    <ConditionCheckBox />
    <ConditionLabel>대전</ConditionLabel>
    <ConditionCheckBox />
    <ConditionName>전형</ConditionName>
    <ConditionLabel>전국</ConditionLabel>
    <ConditionCheckBox />
    <ConditionLabel>마이스터</ConditionLabel>
    <ConditionCheckBox />
    <ConditionLabel>사회통합</ConditionLabel>
    <ConditionCheckBox />
    <ConditionName></ConditionName>
    <ConditionLabel>결제여부</ConditionLabel>
    <ConditionCheckBox />
    <ConditionLabel>원서접수여부</ConditionLabel>
    <ConditionCheckBox />
  </ConditionWrapper>

export default SearchCondition;