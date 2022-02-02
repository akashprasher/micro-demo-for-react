import React from "react";
import propTypes from "prop-types";

let People = (props) => {
  return (
    <div className="container">
      <div className="cards">
        {props.everyone.map((person) => (
          <div key={person.name} className="card">
            <img src={person.image} />
            <h3>{person.name}</h3>
            <p>{person.description}</p>
            <a href={person.wikiLink}>
              <button>Know More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

People.prototype = {
  everyone: propTypes.any,
};

export default People;
