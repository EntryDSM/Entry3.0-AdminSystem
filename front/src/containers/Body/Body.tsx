import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import ApplicantsDataTable from './ApplicantsDataTable/ApplicantsDataTable';
import ApplicantData from './ApplicantData/ApplicantData';

class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={ApplicantsDataTable} exact />
        <Route path='/applicant' component={ApplicantData} />
      </Switch>
    );
  }
}

export default Body;