import React, { Fragment, SFC } from 'react';
import Search from './Search';
import FuncButton from './FuncButton';

interface Props {
  searchText: string;
  onSearchInput(event): void;
  onSearch(searchText: string): void;
  getCSVFile(): void;
  issuingExaminationNumber(): void;
  printExamTable(): void;
}

const ApplicantsHelper: SFC<Props> = props =>
  <Fragment>
    <Search
      searchText={props.searchText}
      onSearchInput={props.onSearchInput}
      onSearch={() => props.onSearch(props.searchText)} />
    <FuncButton
      funcName='전체 지원자 정보(Excel) 다운로드'
      clickEvent={props.getCSVFile} />
    {/* <FuncButton
      funcName='전체 지원자 수험번호 발급' 
      clickEvent={props.issuingExaminationNumber} />
    <FuncButton 
      funcName='전체 지원자 수험표 출력' 
      clickEvent={props.printExamTable} /> */}
  </Fragment>

export default ApplicantsHelper;