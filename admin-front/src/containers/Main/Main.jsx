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

    }
  }

  render() {
    return (
      <Fragment>
        <AsideMenu conditions={this.props.conditions} />
        <Section>
          <DataTable />
        </Section>
      </Fragment>
    );
  }
}

Main.defaultProps = {
  conditions: ['이름', '지역', '전형']
}

export default Main;