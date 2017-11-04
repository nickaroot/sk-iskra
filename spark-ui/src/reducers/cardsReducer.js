import {
  GET_CARDS_FINISHED
} from '../actions/cardsActions';

const initialState = {
  data: {}
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_FINISHED:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}
