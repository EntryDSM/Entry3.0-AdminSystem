import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import AsideMenu from './AsideMenu';
import DataTable from './DataTable';

const Section = styled.section`
  width: calc(100% - 300px);
  height: 100vh;
  padding: 50px;
  float: left;
  box-sizing: border-box;
`

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      searchText: ''
    }

    this.inputSearchText = this.inputSearchText.bind(this);
  }

  inputSearchText(e) {
    const serachText = e.target.value;
    this.setState({
      searchText: serachText
    });
  }

  render() {
    return (
      <Fragment>
        <AsideMenu
          conditions={this.props.conditions}
          inputSearchText={this.inputSearchText}/>
        <Section>
          <DataTable datas={this.state.datas} />
        </Section>
      </Fragment>
    );
  }
}

Main.defaultProps = {
  conditions: ['이름', '지역', '전형']
}

export default Main;

// dumy
// datas: [
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
//   {
//     checked: false,
//     num: 123,
//     name: '정근철',
//     type: 'normal',
//     isReceive: false,
//     isPayment: false
//   },
// ]