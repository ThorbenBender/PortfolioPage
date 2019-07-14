import * as types from "../Action/Index";

function hiddenApplication(state = [], action) {
  switch (action.type) {
    case types.TOGGLE_APPLICATION:
      if (state.includes(action.payload)) {
        state = state.filter(w => w !== action.payload);
        return state;
      } else {
        state = [...state, action.payload];
        return state;
      }
    default:
      return state;
  }
}

export default hiddenApplication;
