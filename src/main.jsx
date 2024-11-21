import React from "react";
import App from "./App";
import { initGA } from './analytics';
import ReactDOM from "react-dom/client";

import "./index.css";

// Initialize Google Analytics
initGA();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
