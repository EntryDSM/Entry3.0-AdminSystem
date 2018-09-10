import * as React from 'react';
import axios from 'axios';
import { Section } from './local-styled/Main';

interface State {
  datas: {
    checked: boolean;
    isPayment: boolean;
    isReceipt: boolean;
    receipt_code: number;
    region: string;
    type: string;
    name: number;
  }[];
  search: {
    text: string;
    isReceipt: boolean;
    isPayment: boolean;
  };
}

class ApplicantsDataTable extends React.Component {
  state: State = {
    datas: [],
    search: {
      text: '',
      isReceipt: false,
      isPayment: false
    }
  }

  async componentDidMount() {
    const config = {
      method: 'GET',
      url: '/applicants',
      params: {
        search: this.state.search.text,
        receipt: this.state.search.isReceipt,
        payment: this.state.search.isPayment
      },
      header: {
        Authorization: ''
      }
    }

    try {
      const response = await axios(config);
      this.setState({
        datas: response.data.map((dataObj: {[k: string]: any}) => dataObj['checked'] = false)
      });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Section>
        
      </Section>
    );
  }
}

export default ApplicantsDataTable;