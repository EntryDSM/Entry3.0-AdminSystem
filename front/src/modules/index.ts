import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import applicants from './applicants';

const rootReducer = combineReducers({
  applicants
});
const Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default Store;