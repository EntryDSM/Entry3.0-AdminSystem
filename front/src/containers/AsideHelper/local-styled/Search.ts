import styled from 'styled-components';
// require('../../../res/ic_search.png'

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 90px);
  height: 50px;
  margin-right: 10px;
  padding-left: 10px;
  border: 1px solid #ddd;
`

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`

const SearchInput = styled.input`
  width: calc(100% - 40px);
  height: 20px;
  padding: 0 10px 0 10px;
  border: 0;
  outline: none;
  font-size: 15px;
`

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  background-color: rgb(143, 185, 204);
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`

export { SearchWrapper, SearchBox, SearchIcon, SearchInput, SearchButton };