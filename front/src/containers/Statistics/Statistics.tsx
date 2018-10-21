import React, { Component } from 'react';
import ApplyStatisticsTable from './ApplyStatisticsTable';
import GradeStatistics from './GradeStatistics';
import { StatisticsWrapper } from './local-styled/Statistics';

class Statistics extends Component {
  render() {
    return (
      <StatisticsWrapper>
        <ApplyStatisticsTable />
        <GradeStatistics />
      </StatisticsWrapper>
    );
  }
}

export default Statistics;