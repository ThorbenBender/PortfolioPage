import * as types from "../Action/Index";
export default function isFolderOpen(state = "", action) {
  switch (action.type) {
    case types.OPEN_FOLDER:
      return action.payload;
    case types.CLOSE_FOLDER:
      return "";
    default:
      return state;
  }
}
