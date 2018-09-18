import * as React from 'react';
import { InputWrapper, Label, Input } from './local-styled/LoginInput';

type Props = {
  label: string,
  type: string,
  event: Function
}

const LoginInput = ({ label, type, event }: Props) =>
  <InputWrapper>
    <Label>{label}</Label>
    <Input name={label} type={type} onChange={() => event()} />
  </InputWrapper>

export default LoginInput;