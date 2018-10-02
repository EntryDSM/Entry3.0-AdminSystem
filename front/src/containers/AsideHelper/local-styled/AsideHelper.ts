import styled from 'styled-components';

const Aside = styled.aside`
  width: 360px;
  min-width: 360px;
  height: 100vh;
  min-height: 710px;
  padding: 30px;
  border-right: 1px solid rgb(154, 193, 210);
  box-sizing: border-box;
`

const AsideHeader = styled.header`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`

export { Aside, AsideHeader };