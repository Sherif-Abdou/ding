import * as Reducers from "./reducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const store = createStore(combineReducers(Reducers), applyMiddleware(thunk));

export default store;
