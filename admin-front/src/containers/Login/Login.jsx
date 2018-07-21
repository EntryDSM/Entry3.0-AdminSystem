import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import LoginInput from './LoginInput';
import BackgroundImg from './background.jpg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const Background = styled.img`
  position: fixed;
  z-index: 0;
`

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

const LoginButton = styled.button`
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ID: '',
      Password: ''
    }

    this.inputAuthInfo = this.inputAuthInfo.bind(this);
    this.submit = this.submit.bind(this);
  }

  inputAuthInfo(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async submit() {
    try {
      await axios.post('');
      this.props.history.push('');
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Background src={BackgroundImg} />
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

export default withRouter(Login);