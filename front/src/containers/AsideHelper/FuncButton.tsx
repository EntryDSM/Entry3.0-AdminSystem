import React from 'react';
import { Button } from './local-styled/FuncButton';

interface Props {
  funcName: string;
  clickEvent: Function;
}

const FuncButton = ({ funcName, clickEvent }: Props) =>
  <Button onClick={() => clickEvent()}>{funcName}</Button>

export default FuncButton;