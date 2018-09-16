import styled from 'styled-components';
// require('../../../res/ic_search.png'

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin-top: 7px;
  padding-left: 10px;
  border: 1px solid #ddd;
`

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`

const SearchInput = styled.input`
  width: 100%;
  height: 20px;
  padding: 0 10px 0 10px;
  border: 0;
  outline: none;
  font-size: 18px;
`

export { SearchBox, SearchIcon, SearchInput };