import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import applicants from './applicants';
import checks from './checks';

const rootReducer = combineReducers({
  applicants,
  checks
});
const Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default Store;