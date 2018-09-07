import * as React from 'react';
import { Aside, AsideHeader } from './styled/AsideHelper';
import SearchFilters from './SearchFilters';

interface State {
  isReceipt: boolean,
  isPayment: boolean
}

interface Target {
  target: HTMLInputElement
}

class AsideHelper extends React.Component {
  state: State = {
    isReceipt: false,
    isPayment: false
  }

  checkFilter = ({ target }: Target): void => {
    this.setState((prevState: State) => {
      if (target.name === 'receipt')
        return { isReceipt: !prevState.isReceipt };
      else
        return { isPayment: !prevState.isPayment };
    });
  }

  render() {
    return (
      <Aside>
        <AsideHeader>지원자 검색</AsideHeader>
        <SearchFilters
          checkFilter={this.checkFilter}
          isReceipt={this.state.isReceipt}
          isPayment={this.state.isPayment}/>
      </Aside>
    );
  }
}

export default AsideHelper;