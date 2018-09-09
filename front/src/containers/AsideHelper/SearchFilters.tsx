import * as React from 'react';
import { Filters } from './styled/SearchFilters';
import SearchFilter from './SearchFilter';

interface Props {
  checkFilter: Function;
  isReceipt: boolean;
  isPayment: boolean;
}

const SearchFilters = ({ checkFilter, isReceipt, isPayment }: Props) =>
  <Filters>
    <SearchFilter filterName='우편 도착 여부' filterId='receipt' checkFilter={checkFilter}/>
    <SearchFilter filterName='결제 여부' filterId='payment' checkFilter={checkFilter}/>
  </Filters>

export default SearchFilters;