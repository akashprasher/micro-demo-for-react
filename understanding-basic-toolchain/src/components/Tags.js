import React from "react";
import data from "../data.json";
import People from "./People";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse: "",
    };
  }

  handleTagClick = (house) => {
    this.setState({
      activeHouse: house,
    });
  };

  render() {
    let houseName = data.map((house) => house.name);
    let everyone;
    if (!this.state.activeHouse) {
      everyone = data.reduce((dtAcc, house) => {
        dtAcc = dtAcc.concat(house.people);
        return dtAcc;
      }, []);
    } else {
      everyone = data.find(
        (house) => house.name === this.state.activeHouse
      ).people;
    }

    let setDefault = () => {
      this.setState({
        activeHouse: "",
      });
    };

    return (
      <>
        <div className="container">
          <ul className="tags">
            <li onClick={() => setDefault()}>All</li>
            {houseName.map((house) => (
              <li
                className={
                  house === this.state.activeHouse ? "active-house" : ""
                }
                onClick={() => this.handleTagClick(house)}
                key={house}
              >
                {house}
              </li>
            ))}
          </ul>
        </div>
        <People everyone={everyone} />
      </>
    );
  }
}

export default Tags;
