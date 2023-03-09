import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./pages/REDUX/store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/context";
import LocalizationProvider from "./context/localizationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <LocalizationProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </LocalizationProvider>
    </ContextProvider>
  </BrowserRouter>
);
