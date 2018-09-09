import * as React from 'react';
import { Aside, AsideHeader } from './styled/AsideHelper';
import SearchFilters from './SearchFilters';
import Search from './Search';

interface State {
  isReceipt: boolean;
  isPayment: boolean;
  search: string;
}

interface Target {
  target: HTMLInputElement;
}

class AsideHelper extends React.Component {
  state: State = {
    search: '',
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

  searchInput = ({ target }: Target): void => {
    this.setState({
      search: target.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <Aside>
        <AsideHeader>지원자 검색</AsideHeader>
        <SearchFilters
          checkFilter={this.checkFilter}
          isReceipt={this.state.isReceipt}
          isPayment={this.state.isPayment}/>
        <Search
          searchInput={this.searchInput}/>
      </Aside>
    );
  }
}

export default AsideHelper;