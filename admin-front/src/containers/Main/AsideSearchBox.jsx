import React, { Fragment } from 'react';
import styled from 'styled-components';
import AsideSearchCondition from './AsideSearchCondition';
import ic_search from './res/ic_search.png';

const SearchBox = styled.div`
  width: 218px;
  height: 40px;
  border: 1px solid #000;
  margin-bottom: 50px;
`

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
`

const SearchInput = styled.input`
  float: right;
  width: 178px;
  height: inherit;
  padding: 0;
  border: 0;
  outline: none;
`

const AsideSearchBox = ({ conditions }) =>
  <Fragment>
    <AsideSearchCondition conditions={conditions} />
    <SearchBox>
      <SearchIcon src={ic_search} />
      <SearchInput placeholder='검색어를 입력하세요' />
    </SearchBox>
  </Fragment>

export default AsideSearchBox;