import React from 'react';
import { SearchBox, SearchIcon, SearchInput } from './local-styled/Search';
import ic_search from './res/ic_search.png';

interface Props {
  searchInput: Function;
  searchValue: string;
}

const Search = ({ searchInput, searchValue }: Props) =>
  <SearchBox>
    <SearchIcon src={ic_search}/>
    <SearchInput
      onChange={event => searchInput(event)}
      placeholder='검색어를 입력하세요'
      value={searchValue} />
  </SearchBox>

export default Search;