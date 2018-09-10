import * as React from 'react';
import { SearchBox, SearchIcon, SearchInput } from './local-styled/Search';
import * as ic_search from './res/ic_search.png';

interface Props {
  searchInput: Function;
}

const Search = ({ searchInput }: Props) =>
  <SearchBox>
    <SearchIcon src={ic_search}/>
    <SearchInput onChange={event => searchInput(event)} placeholder='검색어를 입력하세요'/>
  </SearchBox>

export default Search;