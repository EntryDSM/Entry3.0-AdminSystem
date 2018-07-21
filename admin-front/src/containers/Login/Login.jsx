import React, { Component } from 'react';
import styled from 'styled-components';
import LoginBox from './LoginBox';
import BackgroundImg from './background.jpg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const Background = styled.img`
  position: fixed;
  z-index: 0;
`

class Login extends Component {
  render() {
    return (
      <Container>
        <Background src={BackgroundImg} />
        <LoginBox />
      </Container>
    );
  }
}

export default Login;