import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import appReducer from "./appReducer";

const reducers = combineReducers({
  app: appReducer,
  home: homeReducer
});

export default reducers;