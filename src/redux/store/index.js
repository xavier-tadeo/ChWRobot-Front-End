import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const configureStore = (initialValue) => {
  return createStore(
    roobotReducer,
    initialValue,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
