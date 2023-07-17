import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import rootReducers from "./rootReducers";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
