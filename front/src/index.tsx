import React from 'react';
import { render } from 'react-dom';
import { Login, Navigation } from './containers';
import AsideHelper from './containers/AsideHelper/AsideHelper';
import ExamTable from './containers/ExamTable/ExamTable';
import Statistics from './containers/Statistics/Statistics';
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
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/exam' component={ExamTable} />
            <Route path='/' exact render={() =>
              <gs.RootWrapper>
                <Navigation />
                <AsideHelper />
                <ApplicantsTable />
              </gs.RootWrapper>} />
            <Route path='/statistics' exact render={() =>
              <gs.RootWrapper>
                <Navigation />
                <Statistics />
              </gs.RootWrapper>} />
          </Switch>
        </Router>
    </CookiesProvider>
  </Provider>
, root);