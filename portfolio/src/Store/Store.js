import { createStore } from "redux";
import rootReducer from "../Redux/Reducers/Index";

let store = createStore(rootReducer);

export default store;
