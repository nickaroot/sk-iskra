import { createStore, combineReducers } from 'redux';
import appReducer from './reducers/appReducer';

const reducer = combineReducers({
  app: appReducer,
});

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
