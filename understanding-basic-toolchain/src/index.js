import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import "./styles/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
