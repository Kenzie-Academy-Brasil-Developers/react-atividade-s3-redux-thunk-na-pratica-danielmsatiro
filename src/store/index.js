import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { userReducer } from "./modules/user/reducer";

const reducers = combineReducers({ user: userReducer });

export const store = createStore(reducers, applyMiddleware(thunk));
