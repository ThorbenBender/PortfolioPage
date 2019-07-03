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
    default:
      return state;
  }
}
