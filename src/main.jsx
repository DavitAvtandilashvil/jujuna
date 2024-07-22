import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/fonts.css";
import "./i18n.js";
import { WineContextProvider } from "./context/WineContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WineContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WineContextProvider>
);
