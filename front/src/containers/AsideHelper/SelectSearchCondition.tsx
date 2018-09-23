import React from 'react';
import { Wrapper, Condition, CheckBox } from './local-styled/SelectSearchCondition';

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
    {
      conditions.map(condition =>
        <React.Fragment key={condition.name}>
          <Condition>{condition.name}</Condition>
          <CheckBox type='checkbox' value={condition.value} onClick={event => selectCondition(event)} />
        </React.Fragment>)
    }
  </Wrapper>

export default SelectSearchCondition;