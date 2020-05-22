import * as Reducers from "./reducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    combineReducers(Reducers),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
