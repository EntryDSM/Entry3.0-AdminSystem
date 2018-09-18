import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Background = styled.img`
  position: fixed;
  z-index: 0;
`

export const Box = styled.div`
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

export const HeaderTitle = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`

export const HeaderSubTitle = styled.p`
  margin: 0;
  margin-top: 15px;
  font-size: 13px;
  color: #fff;
`

export const LoginButton = styled.button`
  width: 350px;
  height: 60px;
  margin-top: 90px;
  margin-left: 165px;
  margin-right: 165px;
  border: 0;
  background-color: #fff;
  outline: none;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`