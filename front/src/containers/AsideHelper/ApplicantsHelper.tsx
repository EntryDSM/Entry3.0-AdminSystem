import React, { Fragment } from 'react';
import Search from './Search';
import FuncButton from './FuncButton';

const ApplicantsHelper = ({ searchText, onSearch, onSearchInput, getCSVFile }) =>
  <Fragment>
    <Search
      searchText={searchText}
      onSearchInput={event => onSearchInput(event)}
      onSearch={() => onSearch()} />
    <FuncButton
      funcName='전체 지원자 정보(Excel) 다운로드'
      clickEvent={() => getCSVFile()} />
    <FuncButton
      funcName='전체 지원자 수험번호 발급' 
      clickEvent={() => {}} />
    <FuncButton 
      funcName='전체 지원자 수험표 출력' 
      clickEvent={() => {}} />
    <FuncButton 
      funcName='전체 지원자 최종제출 취소' 
      clickEvent={() => {}} />
  </Fragment>

export default ApplicantsHelper;