import React, { SFC } from 'react';
import { AsideNavigationItem, AsideNavigationItemImage } from './local-styles/NavigationItem';

interface Props {
  id: string;
  image: string;
  move(event): void;
}

const NavigationItem: SFC<Props> = props =>
  <AsideNavigationItem id={props.id} onClick={props.move}>
    <AsideNavigationItemImage src={props.image} />
  </AsideNavigationItem>

export default NavigationItem;