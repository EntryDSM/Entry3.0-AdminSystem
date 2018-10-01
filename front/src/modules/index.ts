import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import applicants from './applicants';
import applicant from './applicant';

const rootReducer = combineReducers({
  applicants,
  applicant
});
const Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default Store;