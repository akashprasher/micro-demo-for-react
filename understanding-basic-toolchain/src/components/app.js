import React from "react";
import Header from "./Header";
import Tags from "./Tags";
import data from "../data.json";
import People from "./People";

class App extends React.Component {
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

  setDefault = () => {
    this.setState({
      activeHouse: "",
    });
  };

  render() {
    // let houseName = data.map((house) => house.name);
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
    return (
      <>
        <Header />
        <Tags
          activeHouse={this.state.activeHouse}
          handleTagClick={this.handleTagClick}
          setDefault={this.setDefault}
          data={data}
        />
        <People everyone={everyone} />
      </>
    );
  }
}

export default App;
