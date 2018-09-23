import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AsideHelper from '../AsideHelper/AsideHelper';
import ApplicantsDataTable from './ApplicantsDataTable/ApplicantsDataTable';
import ApplicantData from './ApplicantData/ApplicantData';

class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <AsideHelper />
        <Switch>
          <Route path='/' component={ApplicantsDataTable} exact />
          <Route path='/applicant' component={ApplicantData} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Body;