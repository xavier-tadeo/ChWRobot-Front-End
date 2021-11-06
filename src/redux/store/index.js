import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import familyRoobotsReducer from "../reducer";

const configureStore = (initialValue) => {
  return createStore(
    familyRoobotsReducer,
    initialValue,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
