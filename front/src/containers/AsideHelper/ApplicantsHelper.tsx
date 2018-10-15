import React, { Fragment } from 'react';
import Search from './Search';
import FuncButton from './FuncButton';

const ApplicantsHelper = ({ searchText, onSearch, onSearchInput, getCSVFile, issuingExaminationNumber }) =>
  <Fragment>
    <Search
      searchText={searchText}
      onSearchInput={event => onSearchInput(event)}
      onSearch={() => onSearch(searchText)} />
    <FuncButton
      funcName='전체 지원자 정보(Excel) 다운로드'
      clickEvent={() => getCSVFile()} />
    <FuncButton
      funcName='전체 지원자 수험번호 발급' 
      clickEvent={() => issuingExaminationNumber()} />
    <FuncButton 
      funcName='전체 지원자 수험표 출력' 
      clickEvent={() => {}} />
  </Fragment>

export default ApplicantsHelper;