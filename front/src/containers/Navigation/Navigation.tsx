import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AsideNavigation } from './local-styles/Navigation';
import NavigationItem from './NavigationItem';
import statistics from './res/bar-chart.png';
import search from './res/magnifying-glass.png';

class Navigation extends Component<any, any> {
  move = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.id === 'statistics') {
      this.props.history.push('/statistics');
    } else {
      this.props.history.push('/');
    }
  }
  
  render() {
    return (
      <AsideNavigation>
        <NavigationItem id='search' move={this.move} image={search} />
        <NavigationItem id='statistics' move={this.move} image={statistics} />
      </AsideNavigation>
    );
  }
}

export default withRouter(Navigation);