import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 350px;
  height: 60px;
  margin-top: 90px;
  margin-left: 165px;
  margin-right: 165px;
  border: 0;
  background-color: #fff;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`

const LoginButton = () =>
  <Button>로그인</Button>

export default LoginButton;