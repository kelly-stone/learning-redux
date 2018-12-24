import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import thunk from "redux-thunk"

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
import { Provider } from "react-redux";

import cofigureStore from "./store/cofigureStore";

const store = cofigureStore;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./App", () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, // make sure has ","
      document.getElementById("root")
    );
  });
}

serviceWorker.unregister();
