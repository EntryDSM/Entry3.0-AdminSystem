import React from 'react';
import { Login } from './containers';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto';
  }
`

const root = document.getElementById('root');
render(<Login />, root);