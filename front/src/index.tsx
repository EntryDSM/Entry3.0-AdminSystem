import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Login, Navigation } from './containers';
import AsideHelper from './containers/AsideHelper/AsideHelper';
import { ApplicantsTable } from './containers/Section';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './modules';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import gs from './global-styled';

const root = document.getElementById('root') as HTMLElement;

render(
  <Provider store={Store}>
    <CookiesProvider>
      <gs.RootWrapper>
        
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' exact render={() =>
              <Fragment>
                <Navigation />
                <AsideHelper />
                <ApplicantsTable />
              </Fragment>} />
          </Switch>
        </Router>
      </gs.RootWrapper>
    </CookiesProvider>
  </Provider>
, root);