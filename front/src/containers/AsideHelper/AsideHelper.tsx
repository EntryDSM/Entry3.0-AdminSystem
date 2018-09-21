import * as React from 'react';
import axios from 'axios';
import { Aside, AsideHeader } from './local-styled/AsideHelper';
import Search from './Search';
import SearchButton from './SearchButton';
import SearchFilters from './SearchFilters';
import ExcelRequestButton from './ExcelRequestButton';
import { connect } from 'react-redux';
import { updateDataAsync, updateData } from '../../modules/applicants';
import { withCookies } from 'react-cookie';
// import SelectSearchCondition from './SelectSearchCondition';   --deprecated

interface State {
  isReceipt: boolean;
  isPayment: boolean;
  search: string;
  conditions: {
    [k:string]: any;
  }
}

class AsideHelper extends React.Component<any, any> {
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
    console.log('[AsideHelper] - search');
    const jwt = this.props.cookies.cookies.accessToken;
    this.props.updateDataAsync(jwt, this.state.search);
  }

  requestCSVFile = (): void => {
    axios.post('/applicants/excel', {
      headers: {
        Authorization: this.props.cookies
      },
      params: {
        users: this.props.data.map((user: any) => user.userId)
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount = () => {
    this.search();
  }

  render() {
    return (
      <Aside>
        <AsideHeader>지원자 검색</AsideHeader>
        <SearchFilters
          checkFilter={this.checkFilter}
          isReceipt={this.state.isReceipt}
          isPayment={this.state.isPayment}/>
        <Search
          searchInput={this.searchInput}
          searchValue={this.state.search} />
        <SearchButton search={this.search} />
        <ExcelRequestButton request={this.requestCSVFile} />
      </Aside>
    );
  }
}

const mapDispatchToProps = { updateDataAsync };

const mapStateToProps = (state: any) => ({
  data: state.data
});

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(AsideHelper));