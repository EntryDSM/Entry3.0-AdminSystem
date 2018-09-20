import * as React from 'react';
import axios from 'axios';
import LoginInput from './LoginInput';
import { Redirect } from 'react-router-dom';
import { Container, Background, Box, HeaderTitle, HeaderSubTitle, LoginButton } from './local-styled/Login';
import { withCookies } from 'react-cookie';
import * as bakcground_img from './res/background.jpg';

type State = {
  id: string,
  password: string,
  isLogin: boolean
}

class Login extends React.Component<any, any> {
  state: State = {
    id: '',
    password: '',
    isLogin: false
  }

  inputAuthInfo = ({ target }: Target) => {
    this.setState({
      [target.name]: target.value
    });
  }

  submit = () => {
    axios.post('http://52.79.60.204/auth', {
      id: this.state.id,
      pw: this.state.password
    }).then(res => {
      const { cookies } = this.props;
      cookies.set('accessToken', res.data.accessToken);
      this.setState((prevState: State) => ({
        isLogin: !prevState.isLogin
      }));
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      this.state.isLogin ? (
        <Redirect to='/' />
      ) : (
        <Container>
          <Background src={bakcground_img} />
          <Box>
            <HeaderTitle>관리자 로그인</HeaderTitle>
            <HeaderSubTitle>부여받은 아이디와 비밀번호를 입력하시오</HeaderSubTitle>
            <LoginInput label='id' type='text' inputEvent={this.inputAuthInfo} />
            <LoginInput label='password' type='password' inputEvent={this.inputAuthInfo} />
            <LoginButton onClick={this.submit}>로그인</LoginButton>
          </Box>
        </Container>
      )
    );
  }
}

export default withCookies(Login);