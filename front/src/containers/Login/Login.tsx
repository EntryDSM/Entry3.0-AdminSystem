import React, { Component } from 'react';
import axios from 'axios';
import LoginInput from './LoginInput';
import { Redirect } from 'react-router-dom';
import { Container, Background, Box, HeaderTitle, HeaderSubTitle, LoginButton } from './local-styled/Login';
import { withCookies } from 'react-cookie';
import bakcground_img from './res/background.jpg';

interface State {
  id: string;
  password: string;
  isLogin: boolean;
}

class Login extends Component<any, any> {
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

  submit = (): void => {
    axios.post('https://admin-api.entrydsm.hs.kr:80/api/auth', {
      id: this.state.id,
      pw: this.state.password
    }).then(res => {
      const { cookies } = this.props;
      cookies.set('accessToken', `JWT ${res.data.accessToken}`);
      this.setState((prevState: State) => ({
        isLogin: !prevState.isLogin
      }));
    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount = () => {
    this.setState(() => {
      if (this.props.cookies.cookies.accessToken) {
        return { isLogin: true }
      } else {
        return { isLogin: false }
      }
    })
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