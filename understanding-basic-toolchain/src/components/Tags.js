import React from "react";

let Tags = () => {
  let houseName = this.props.data.map((house) => house.name);

  return (
    <>
      <div className="container">
        <ul className="tags">
          <li onClick={() => this.props.setDefault()}>All</li>
          {houseName.map((house) => (
            <li
              className={house === this.props.activeHouse ? "active-house" : ""}
              onClick={() => this.props.handleTagClick(house)}
              key={house}
            >
              {house}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tags;
