import React from "react";
import { Link } from "react-router-dom";

let NotFound = () => {
  return (
    <>
      <div className="wrapper">
        <div style={{ "text-align": "center" }}>
          <h1>Avada Kedavra 😵</h1>
          <Link className="nav-item" to="/">
            Wanna undo? 🎇
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
