import React from 'react';
import { Button } from './local-styled/SearchButton';

interface Props {
  search: Function;
}

const SearchButton = ({ search }: Props) =>
  <Button onClick={() => search()}>검색</Button>

export default SearchButton;