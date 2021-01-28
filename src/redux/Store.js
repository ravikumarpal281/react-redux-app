import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootreducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
