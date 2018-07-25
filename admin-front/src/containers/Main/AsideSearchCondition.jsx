import React, { Fragment } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 80px;
  height: 30px;
  border: 0;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`

const Label = styled.span`
  font-size: 13px;
  margin-right: 5px;
`

const AsideSearchCondition = ({ conditions, event }) =>
  <Fragment>
    <Label>검색조건: </Label>
    <Select>
      {
        conditions.map(condition =>
          <option onClick={event} name={condition} key={`_${condition}`}>{condition}</option>
        )
      }
    </Select>
  </Fragment>
  
export default AsideSearchCondition;