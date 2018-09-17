import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import ApplicantsDataTable from './ApplicantsDataTable/ApplicantsDataTable';

class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={ApplicantsDataTable} />
      </Switch>
    );
  }
}

export default Body;