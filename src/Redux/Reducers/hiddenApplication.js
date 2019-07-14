import * as types from "../Action/Index";

function hiddenApplication(state = [], action) {
  switch (action.type) {
    case types.HIDE_APPLICATION:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;
    case types.SHOW_APPLICATION:
      state = state.filter(e => {
        return e !== action.payload;
      });
      return state;
    default:
      return state;
  }
}

export default hiddenApplication;
