import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import AsideMenu from './AsideMenu';

const Section = styled.section`
  width: calc(100% - 300px);
  height: 100vh;
  float: left;
  background-color: rgb(56, 54, 55);
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
        <Section></Section>
      </Fragment>
    );
  }
}

Main.defaultProps = {
  conditions: ['이름', '지역', '전형']
}

export default Main;