import { combineReducers } from "redux";
import modals from "./modalReducer";
import isFolderOpen from "./openFolder";
import hiddenApplication from "./hiddenApplication";

let rootReducer = combineReducers({ modals, isFolderOpen, hiddenApplication });

export default rootReducer;
