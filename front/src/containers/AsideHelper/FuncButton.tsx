import React from 'react';
import { Button } from './local-styled/FuncButton';

interface Props {
  funcName: string;
  clickEvent: Function;
  id?: string;
}

const FuncButton = ({ funcName, clickEvent, id }: Props) =>
  <Button onClick={(event) => clickEvent(event)} id={id}>{funcName}</Button>

export default FuncButton;