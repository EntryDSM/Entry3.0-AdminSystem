import * as React from 'react';
import { Filter, FilterCheckBox, FilterName } from './local-styled/SearchFilter';

interface Props {
  checkFilter: Function;
  filterName: string;
  filterId: string;
}

const SearchFilter = ({ checkFilter, filterName, filterId }: Props) =>
  <Filter>
    <FilterCheckBox type='checkbox' name={filterId} onClick={event => checkFilter(event)}/>
    <FilterName>{filterName}</FilterName>
  </Filter>

export default SearchFilter;