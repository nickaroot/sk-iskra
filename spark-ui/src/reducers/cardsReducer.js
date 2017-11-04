import {
  GET_CARDS_START
} from '../actions/cardsActions';

const initialState = {
  cards: {}
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_START:
      return Object.assign({}, state, {
        cards: action.data
      });
    default:
      return state;
  }
}
