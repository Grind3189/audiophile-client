import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import WidthContextProvider from "./context/WidthContextProvider.tsx";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WidthContextProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </WidthContextProvider>
  </React.StrictMode>,
);
