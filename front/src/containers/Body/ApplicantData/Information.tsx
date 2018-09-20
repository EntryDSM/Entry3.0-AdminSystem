import * as React from 'react';
import { InformationWrapper, InformationName, InformationText } from './local-styled/Information';

type Props = {
  name: string,
  text: string
}

const Information = ({ name, text }: Props) =>
  <InformationWrapper>
    <InformationName>{name}</InformationName>
    <InformationText>{text}</InformationText>
  </InformationWrapper>

export default Information;