import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';

class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={Main} />
      </Switch>
    );
  }
}

export default Body;