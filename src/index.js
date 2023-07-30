import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import useReducer from "./features/user";
import themeReducer from "./features/theme";
const store = configureStore({
  reducer: {
    user: useReducer,
    theme: themeReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
