import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', NanumSquare;
  }

  div {
    box-sizing: border-box;
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
  `
}

const Color = {
  skyBlue: 'rgb(154, 193, 210)'
}

export default { RootWrapper, CheckBox, Tag, Color };