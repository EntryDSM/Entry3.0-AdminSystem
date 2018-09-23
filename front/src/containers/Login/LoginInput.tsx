import React from 'react';
import { InputWrapper, Label, Input } from './local-styled/LoginInput';

interface Props {
  label: string;
  type: string;
  inputEvent: Function;
}

const LoginInput = ({ label, type, inputEvent }: Props) =>
  <InputWrapper>
    <Label>{label}</Label>
    <Input name={label} type={type} onChange={event => inputEvent(event)} />
  </InputWrapper>

export default LoginInput;