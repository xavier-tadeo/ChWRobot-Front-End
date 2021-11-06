import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import roobotsReducer from "../reducer/roobotsReducer";

const configureStore = (initialValue) => {
  return createStore(
    roobotsReducer,
    initialValue,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
