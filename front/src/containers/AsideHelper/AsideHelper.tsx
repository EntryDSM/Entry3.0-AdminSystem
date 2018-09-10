import * as React from 'react';
import { Aside, AsideHeader } from './local-styled/AsideHelper';
import SearchFilters from './SearchFilters';
import Search from './Search';
import SelectSearchCondition from './SelectSearchCondition';

interface State {
  isReceipt: boolean;
  isPayment: boolean;
  search: string;
  condition: {
    name: boolean,
    region: boolean,
    type: boolean
  }
}

interface Target {
  target: HTMLInputElement;
}

class AsideHelper extends React.Component {
  state: State = {
    isReceipt: false,
    isPayment: false,
    search: '',
    condition: {
      name: false,
      region: false,
      type: false
    }
  }

  checkFilter = ({ target }: Target): void => {
    this.setState((prevState: State) => {
      if (target.name === 'receipt')
        return { isReceipt: !prevState.isReceipt };
      else
        return { isPayment: !prevState.isPayment };
    });
  }

  selectCondition = ({ target }: Target): void => {
    const conditionInit: object = {
      name: false,
      region: false,
      type: false
    }

    this.setState((prevState: State) => {
      if (target.value === 'name')
        return { condition: { ...conditionInit, name: !prevState.condition.name } };
      else if (target.value === 'region')
        return { condition: { ...conditionInit, region: !prevState.condition.region } };
      else if (target.value === 'type')
        return { condition: { ...conditionInit, type: !prevState.condition.type } };
      else
        return { condition: { ...conditionInit } };
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
        <SelectSearchCondition
          conditions={[
            { value: 'none', name: '전체' },
            { value: 'name', name: '이름' },
            { value: 'region', name: '지역' },
            { value: 'type', name: '전형' }
          ]}
          selectCondition={this.selectCondition}/>
        <Search
          searchInput={this.searchInput}/>
      </Aside>
    );
  }
}

export default AsideHelper;