import styled from 'styled-components';

const Filter = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

const FilterCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`

const FilterName = styled.div`
  margin-left: 10px;
`

export { Filter, FilterCheckBox, FilterName };