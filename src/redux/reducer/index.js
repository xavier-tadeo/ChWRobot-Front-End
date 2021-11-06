import { combineReducers } from "redux";
import roobotsReducer from "./roobotsReducer";

const familyRoobotsReducer = combineReducers({
  roobots: roobotsReducer,
});

export default familyRoobotsReducer;
