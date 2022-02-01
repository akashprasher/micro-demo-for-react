import React from "react";
// import ReactDOM from "react-dom";
import Header from "./Header";
import Hero from "./Hero";
import Articles from "./Articles";
import Footer from "./Footer";

const App = () => (
  <>
    <Header />
    <Hero />
    <div className="articles container">
      <Articles />
    </div>

    <Footer />
  </>
);

export default App;
