import React, { Component } from 'react';
import { AsideNavigation } from './local-styles/Navigation';
import NavigationItem from './NavigationItem';

class Navigation extends Component {
  render() {
    return (
      <AsideNavigation>
        <NavigationItem />
        <NavigationItem />
      </AsideNavigation>
    );
  }
}

export default Navigation;