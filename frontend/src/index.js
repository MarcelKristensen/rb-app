import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ArticlesContextProvider } from "./context/ArticlesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArticlesContextProvider>
      <App />
    </ArticlesContextProvider>
  </React.StrictMode>
);
