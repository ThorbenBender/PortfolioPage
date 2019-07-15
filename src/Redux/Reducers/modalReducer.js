import * as types from "../Action/Index";

export default function modals(state = [], action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;
    case types.CLOSE_MODAL:
      state = state.filter(e => {
        return e !== action.payload;
      });
      return state;
    case types.ON_FOCUS_APPLICATION:
      if (state[state.length - 1] === action.payload) {
        return state;
      } else {
        let savedItem = state[state.indexOf(action.payload)];
        state[state.indexOf(savedItem)] = state[state.length - 1];
        state[state.length - 1] = savedItem;
        return state;
      }
    default:
      return state;
  }
}
