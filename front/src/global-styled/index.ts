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

const Tag = {
  P: styled.p`
    font-size: 13px;
  `
}

export default { RootWrapper, Tag };