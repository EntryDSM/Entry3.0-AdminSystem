import * as React from 'react';
import { render } from 'react-dom';
import { Body, Login } from './containers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Store from './store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import adminSystem from './reducers';
import gs from './global-styled';

const root = document.getElementById('root') as HTMLElement;

render(
  <Provider store={Store}>
    <CookiesProvider>
      <Router>
        <React.Fragment>
          <Route path='/login' component={Login} />
          <gs.RootWrapper>
            <Body />
          </gs.RootWrapper>
        </React.Fragment>
      </Router>
    </CookiesProvider>
  </Provider>
, root);