import * as React from 'react';
import { Aside, Header } from './styled/AsideHelper';

class AsideHelper extends React.Component {
  render() {
    return (
      <Aside>
        <Header>지원자 검색</Header>
      </Aside>
    );
  }
}

export default AsideHelper;