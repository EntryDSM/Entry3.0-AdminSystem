import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 30px;
  margin: auto;
  margin-top: 50px;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: none;
  color: #fff;
  box-sizing: border-box;
`

const Label = styled.div`
  position: absolute;
  left: -90px;
  width: 80px;
  height: 100%;
  padding: 5px 0;
  text-align: left;
  font-size: 17px;
  color: #fff;
  box-sizing: border-box;
`

const LoginInput = ({ label, type }) =>
  <InputWrapper>
    <Label>{label}</Label>
    <Input name={label} type={type} />
  </InputWrapper>

export default LoginInput;