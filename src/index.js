import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import ThemeProvider from './providers/ThemeProvider';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './redux/Slices/theme';


import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
