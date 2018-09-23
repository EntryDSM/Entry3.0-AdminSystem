import React from 'react';
import { render } from 'react-dom';
import { Body, Login } from './containers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './modules';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import gs from './global-styled';

const root = document.getElementById('root') as HTMLElement;

render(
  <Provider store={Store}>
    <CookiesProvider>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <gs.RootWrapper>
            <Body />
          </gs.RootWrapper>
        </Switch>
      </Router>
    </CookiesProvider>
  </Provider>
, root);