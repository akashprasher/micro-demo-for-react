import React from "react";
// import { ReactDOM } from "react";

class SelectTag extends React.Component {
  constructor(props) {
    super();
    this.state = {
      game: "football",
    };
  }

  handleSelect = (e) => {
    this.setState({ game: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Favroit Game is " + this.state.game);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-one">
          <h2>Controlled Component</h2>
          <label htmlFor="game">Your Favorite Game?</label>
          <select value={this.state.game} onChange={this.handleSelect}>
            <option value="football">football</option>
            <option value="basketball">basketball</option>
            <option value="vollyball">vollyball</option>
            <option value="cricket">cricket</option>
          </select>
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}
export default SelectTag;
