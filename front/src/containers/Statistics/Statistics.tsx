import React, { Component } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import ApplyStatisticsTable from './ApplyStatisticsTable';
import GradeStatistics from './GradeStatistics';
import { StatisticsWrapper } from './local-styled/Statistics';

interface State {
  competitionRate: {
    daejeon: {
      meister: string;
      normal: string;
      social: string;
      total: string;
    },
    nationwide: {
      meister: string;
      normal: string;
      social: string;
      total: string;
    },
    total: string;
  },
  numberOfApplicants: {
    daejeon: {
      meister: number;
      normal: number;
      social: number;
      total: number;
    },
    nationwide: {
      meister: number;
      normal: number;
      social: number;
      total: number;
    },
    total: number;
  },
  onScore: {
    daejeon: {
      meister: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      },
      normal: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      },
      social: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      }
    },
    nationwide: {
      meister: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      },
      normal: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      },
      social: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      }
    }
  },
  isUpdate: boolean;
}
interface Props {

}

class Statistics extends Component<Props, State> {
  state = {
    competitionRate: {
      daejeon: {
        meister: '',
        normal: '',
        social: '',
        total: ''
      },
      nationwide: {
        meister: '',
        normal: '',
        social: '',
        total: ''
      },
      total: ''
    },
    numberOfApplicants: {
      daejeon: {
        meister: 0,
        normal: 0,
        social: 0,
        total: 0
      },
      nationwide: {
        meister: 0,
        normal: 0,
        social: 0,
        total: 0
      },
      total: 0
    },
    onScore: {
      daejeon: {
        meister: {
          '100u': 0,
          '110u': 0,
          '120u': 0,
          '130u': 0,
          '140u': 0,
          '150u': 0,
          '70u': 0,
          '80u': 0,
          '90u': 0
        },
        normal: {
          '100u': 0,
          '110u': 0,
          '120u': 0,
          '130u': 0,
          '140u': 0,
          '150u': 0,
          '70u': 0,
          '80u': 0,
          '90u': 0
        },
        social: {
          '100u': 0,
          '110u': 0,
          '120u': 0,
          '130u': 0,
          '140u': 0,
          '150u': 0,
          '70u': 0,
          '80u': 0,
          '90u': 0
        }
      },
      nationwide: {
        meister: {
          '100u': 0,
          '110u': 0,
          '120u': 0,
          '130u': 0,
          '140u': 0,
          '150u': 0,
          '70u': 0,
          '80u': 0,
          '90u': 0
        },
        normal: {
          '100u': 0,
          '110u': 0,
          '120u': 0,
          '130u': 0,
          '140u': 0,
          '150u': 0,
          '70u': 0,
          '80u': 0,
          '90u': 0
        },
        social: {
          '100u': 0,
          '110u': 0,
          '120u': 0,
          '130u': 0,
          '140u': 0,
          '150u': 0,
          '70u': 0,
          '80u': 0,
          '90u': 0
        }
      }
    },
    isUpdate: false
  }
  
  async componentDidMount() {
    const jwt = new Cookies().get('accessToken');
    try {
      const response = await axios.get('https://admin-api.entrydsm.hs.kr:80/api/statistic', {
        headers: {
          Authorization: jwt
        }
      });
      this.setState(response.data);
      this.setState({ isUpdate: true });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (!this.state.isUpdate) {
      return <div>Loading...</div>
    } else {
      return (
        <StatisticsWrapper>
          <ApplyStatisticsTable
            competitionRate={this.state.competitionRate}
            numberOfApplicants={this.state.numberOfApplicants} />
          <GradeStatistics
            onScore={this.state.onScore} />
        </StatisticsWrapper>
      );
    }
  }
}

export default Statistics;