import * as React from 'react';
import { Wrapper, Select, SearchCondition } from './local-styled/SelectSearchCondition';
import gs from '../../global-styled';

interface Condition {
  value: string;
  name: string;
}

interface Props {
  selectCondition: Function;
  conditions: Array<Condition>;
}

const SelectSearchCondition = ({ conditions, selectCondition }: Props) =>
  <Wrapper>
    <gs.Tag.P>조건선택</gs.Tag.P>
    <Select onChange={event => selectCondition(event)}>
      {
        conditions.map(condition =>
          <SearchCondition value={condition.value}>
            {condition.name}
          </SearchCondition>)
      }
    </Select>
  </Wrapper>

export default SelectSearchCondition;