import * as React from 'react';
import { render } from 'react-dom';
import { Body, AsideHelper } from './containers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import styled from 'styled-components';

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const root = document.getElementById('root') as HTMLElement;
render(
  <Router>
    <Wrapper>
      <AsideHelper />
      <Body />
    </Wrapper>
  </Router>
, root);