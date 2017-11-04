import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';
import cardsReducer from './reducers/cardsReducer';

const reducer = combineReducers({
  app: appReducer,
  cards: cardsReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
