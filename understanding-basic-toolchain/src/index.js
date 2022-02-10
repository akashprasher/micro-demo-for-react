import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import "./styles/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header />
    </div>
    <Routes>
      <Route path="/" exact element={<App />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post">
        <Route path=":postId" element={<Post />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
