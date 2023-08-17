import { createStore } from "redux";
import { combineReducers } from "redux";
import userReducer from "./reducer";

const rootReducer = combineReducers({
  data: userReducer,
});

const store = createStore(rootReducer);
export default store;
