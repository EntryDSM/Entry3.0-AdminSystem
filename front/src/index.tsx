import * as React from 'react';
import { render } from 'react-dom';
import { Body, AsideHelper } from './containers';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import adminSystem from './reducers';
import gs from './global-styled';

const store = createStore(adminSystem);
const root = document.getElementById('root') as HTMLElement;

render(
  <Provider store={store}>
    <Router>
      <gs.RootWrapper>
        <AsideHelper />
        <Body />
      </gs.RootWrapper>
    </Router>
  </Provider>
, root);