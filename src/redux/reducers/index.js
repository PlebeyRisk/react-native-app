import { combineReducers } from "redux";
import homeReducer from "./homeReducer";

const reducers = combineReducers({
  home: homeReducer
});

export default reducers;