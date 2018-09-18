import * as React from 'react';
import axios from 'axios';
import { Aside, AsideHeader } from './local-styled/AsideHelper';
import Search from './Search';
import SearchButton from './SearchButton';
import SearchFilters from './SearchFilters';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateApplicantsData } from '../../actions/applicants';
// import SelectSearchCondition from './SelectSearchCondition';   --deprecated

interface State {
  isReceipt: boolean;
  isPayment: boolean;
  search: string;
  conditions: {
    [k:string]: any;
  }
}

class AsideHelper extends React.Component {
  state: State = {
    isReceipt: false,
    isPayment: false,
    search: '',
    conditions: {}
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
  }

  searchInput = ({ target }: Target): void => {
    this.setState({
      search: target.value
    });
  }

  search = (): void => {
    axios.get(`?${this.state.search}`, { headers: {  } })
  }

  render() {
    console.log(this)
    return (
      <Aside>
        <AsideHeader>지원자 검색</AsideHeader>
        <SearchFilters
          checkFilter={this.checkFilter}
          isReceipt={this.state.isReceipt}
          isPayment={this.state.isPayment}/>
        {/* <SelectSearchCondition
          conditions={[
            { value: 'name', name: '이름' },
            { value: 'region', name: '지역' },
            { value: 'type', name: '전형' }
          ]}
          selectCondition={this.selectCondition}/> */}
        <Search
          searchInput={this.searchInput}
          searchValue={this.state.search} />
        <SearchButton search={this.search} />
      </Aside>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  search: (data: ApplicantsData) => dispatch(updateApplicantsData(data))
});

export default connect(mapDispatchToProps)(AsideHelper);