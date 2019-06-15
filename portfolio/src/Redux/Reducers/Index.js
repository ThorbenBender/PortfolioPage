import { combineReducers } from "redux";
import modals from "./modalReducer";

let rootReducer = combineReducers({ modals });

export default rootReducer;
