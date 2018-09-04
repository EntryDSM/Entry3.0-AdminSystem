import * as React from 'react';
import { render } from 'react-dom';
import { Main } from './containers/index';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

const root = document.getElementById('root');
render(<Main />, root);