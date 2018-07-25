import React from 'react';
import styled from 'styled-components';

const SearchFilter = styled.div`
  margin-bottom: 20px;
`

const CheckBox = styled.input`
  margin-right: 10px;
`

const Label = styled.label`
  font-size: 15px;
`

const AsideSearchFilter = ({ label }) =>
  <SearchFilter>
    <CheckBox type='checkbox' />
    <Label>{label}</Label>
  </SearchFilter>

export default AsideSearchFilter;