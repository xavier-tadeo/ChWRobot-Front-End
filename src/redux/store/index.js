import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import familyRoobotsReducer from "../reducer/index";

const configureStore = (initialValue) => {
  return createStore(
    familyRoobotsReducer,
    initialValue,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
