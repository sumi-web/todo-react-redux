import React from "react";
import ReactDom from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import { Provider } from "react-redux";
// import store from "redux";

import { todoAppReducer } from "./reducer"
import App from "./App"

const reducers = combineReducers({
  todo_store: todoAppReducer
})

const store = createStore(reducers, applyMiddleware(logger))

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root"))