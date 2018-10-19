import React, { SFC } from 'react';
import { Button } from './local-styled/FuncButton';

interface Props {
  funcName: string;
  clickEvent(event): void;
  id?: string;
}

const FuncButton: SFC<Props> = props =>
  <Button onClick={props.clickEvent} id={props.id}>{props.funcName}</Button>

export default FuncButton;