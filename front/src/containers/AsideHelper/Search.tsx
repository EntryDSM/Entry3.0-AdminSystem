import React, { Fragment, SFC } from 'react';
import { SearchBox, SearchIcon, SearchInput, SearchButton, SearchWrapper } from './local-styled/Search';
import SearchCondition from './SearchCondition';
import gs from '../../global-styled';
import ic_search from './res/ic_search.png';

interface Props {
  searchText: string;
  onSearchInput(event): void;
  onSearch(event): void;
}

const Search: SFC<Props> = props =>
  <Fragment>
    <gs.Tag.H2>지원자 검색</gs.Tag.H2>
    <SearchWrapper>
      <SearchBox>
        <SearchIcon src={ic_search}/>
        <SearchInput
          onChange={props.onSearchInput}
          value={props.searchText}
          placeholder='검색어를 입력하세요' />
      </SearchBox>
      <SearchButton onClick={props.onSearch}>검색</SearchButton>
    </SearchWrapper>
    <SearchCondition />
  </Fragment>

export default Search;