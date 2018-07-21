import React from 'react';
import styled from 'styled-components';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transfrom: translate(-50%, -50%);
  z-index: 1;
  width: 800px;
  height: 500px;
  border: 10px solid #fff;
  padding: 50px;
  box-sizing: border-box;
`

const HeaderTitle = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`

const HeaderSubTitle = styled.p`
  margin: 0;
  margin-top: 15px;
  font-size: 13px;
  color: #fff;
`

const InputBox = styled.div`
  
`

const LoginBox = () => {
  return (
    <Box>
      <HeaderTitle>관리자 로그인</HeaderTitle>
      <HeaderSubTitle>부여받은 아이디와 비밀번호를 입력하시오</HeaderSubTitle>
      <InputBox>
        <LoginInput label='ID' type='text' />
        <LoginInput label='Password' type='password' />
      </InputBox>
      <LoginButton />
    </Box>
  );
}

export default LoginBox;