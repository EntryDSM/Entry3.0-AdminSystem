import React, { Fragment } from 'react';
import { SearchBox, SearchIcon, SearchInput, SearchButton, SearchWrapper } from './local-styled/Search';
import gs from '../../global-styled';
import ic_search from './res/ic_search.png';

interface Props {
  searchInput: Function;
  searchValue: string;
}

const Search = () =>
  <Fragment>
    <gs.Tag.H2>지원자 검색</gs.Tag.H2>
    <SearchWrapper>
      <SearchBox>
        <SearchIcon src={ic_search}/>
        <SearchInput
          placeholder='검색어를 입력하세요' />
      </SearchBox>
      <SearchButton onClick={() => {}}>검색</SearchButton>
    </SearchWrapper>
  </Fragment>

export default Search;