import {
  GET_CARDS_FINISHED,
  SET_CHANGES_FINISHED
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
    case SET_CHANGES_FINISHED: {
      let sectionId = action.fieldData.sectionId;
      let fieldId = action.fieldData.fieldId;
      let newState = Object.assign({}, state);

      newState.data[sectionId].values[fieldId].checked = action.isChecked
      return Object.assign({}, state, newState);
    }
    default:
      return state;
  }
}
