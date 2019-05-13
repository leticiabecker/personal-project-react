import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AppCtn from "./containers/AppCtn";
import { reducer } from "./reducers/reducer";

const store = createStore(reducer, undefined, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <AppCtn />
  </Provider>,
  rootElement
);
