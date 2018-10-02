import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', NanumSquare;
  }
`

const RootWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const CheckBox = styled.input.attrs({
  type: 'checkbox'
})``

const Tag = {
  P: styled.p`
    font-size: 13px;
  `,
  H2: styled.h2`
    font-size: 14px;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
  `
}

const Color = {
  skyBlue: 'rgb(154, 193, 210)'
}

export default { RootWrapper, CheckBox, Tag, Color };