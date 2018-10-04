import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import applicants from './applicants';
import applicant from './applicant';
import aside from './aside';

const rootReducer = combineReducers({
  applicants,
  applicant,
  aside
});
const Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default Store;