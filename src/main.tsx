import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import ReduxPersistor from "./app/ReduxPersistor.tsx";
import ReduxProvier from "./app/ReduxProvier.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ReduxProvier>
        <ReduxPersistor>
          <App />
        </ReduxPersistor>
      </ReduxProvier>
    </Router>
  </React.StrictMode>,
);
