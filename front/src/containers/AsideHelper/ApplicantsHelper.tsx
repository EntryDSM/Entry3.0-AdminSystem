import React, { Component } from 'react';
import { Aside } from './local-styled/AsideHelper';
import Search from './Search';
import FuncButton from './FuncButton';

class ApplicantsHelper extends Component {
  render() {
    return (
      <Aside>
        <Search />
        <FuncButton funcName='전체 지원자 정보(Excel) 다운로드' clickEvent={() => {}} />
        <FuncButton funcName='전체 지원자 수험번호 발급' clickEvent={() => {}} />
        <FuncButton funcName='전체 지원자 수험표 출력' clickEvent={() => {}} />
        <FuncButton funcName='전체 지원자 응시료 납부확인' clickEvent={() => {}} />
        <FuncButton funcName='전체 지원자 응시료 납부확인 취소' clickEvent={() => {}} />
        <FuncButton funcName='전체 지원자 서류도착확인' clickEvent={() => {}} />
        <FuncButton funcName='전체 지원자 서류도착확인 취소' clickEvent={() => {}} />
        <FuncButton funcName='전체 지원자 최종제출 취소' clickEvent={() => {}} />
      </Aside>
    );
  }
}

export default ApplicantsHelper;