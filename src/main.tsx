import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import ReduxProvier from "./app/ReduxProvier.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ReduxProvier>
        <App />
      </ReduxProvier>
    </Router>
  </React.StrictMode>,
);
