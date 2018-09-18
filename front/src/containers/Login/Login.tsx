import * as React from 'react';
import axios from 'axios';
import LoginInput from './LoginInput';
import { Container, Background, Box, HeaderTitle, HeaderSubTitle, LoginButton } from './local-styled/Login';
import * as bakcground_img from './res/background.jpg';

type State = {
  id: string,
  password: string
}

class Login extends React.Component {
  state: State = {
    id: '',
    password: ''
  }

  inputAuthInfo = ({ target }: Target) => {
    this.setState({
      [target.name]: target.value
    });
  }

  submit = () => {
  }

  render() {
    return (
      <Container>
        <Background src={bakcground_img} />
        <Box>
          <HeaderTitle>관리자 로그인</HeaderTitle>
          <HeaderSubTitle>부여받은 아이디와 비밀번호를 입력하시오</HeaderSubTitle>
          <LoginInput label='ID' type='text' event={this.inputAuthInfo} />
          <LoginInput label='Password' type='password' event={this.inputAuthInfo} />
          <LoginButton onClick={this.submit}>로그인</LoginButton>
        </Box>
      </Container>
    );
  }
}

export default Login;