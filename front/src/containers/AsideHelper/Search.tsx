import React, { Fragment } from 'react';
import { SearchBox, SearchIcon, SearchInput, SearchButton, SearchWrapper } from './local-styled/Search';
import gs from '../../global-styled';
import ic_search from './res/ic_search.png';

interface Props {
  searchText: string;
  onSearchInput: Function;
  onSearch: Function;
}

const Search = ({ searchText, onSearchInput, onSearch }: Props) =>
  <Fragment>
    <gs.Tag.H2>지원자 검색</gs.Tag.H2>
    <SearchWrapper>
      <SearchBox>
        <SearchIcon src={ic_search}/>
        <SearchInput
          onChange={event => onSearchInput(event)}
          value={searchText}
          placeholder='검색어를 입력하세요' />
      </SearchBox>
      <SearchButton onClick={() => onSearch()}>검색</SearchButton>
    </SearchWrapper>
  </Fragment>

export default Search;