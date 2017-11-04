const initialState = {
  deviceId: '123'
};

export default function app(state = initialState, action) {
  switch (action.type) {
    // case SET_VISIBILITY_FILTER:
    //  return Object.assign({}, state, {
    //    visibilityFilter: action.filter
    //  })
    default:
      return state;
  }
}
