import React from "react";
// import { ReactDOM } from "react";

class FormInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputText: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputText) {
      alert("Your email is " + this.state.inputText);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-one">
          <h2>Controlled Component</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={this.state.inputText}
            onChange={this.handleInputChange}
            placeholder="Enter Your Email"
          />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}
export default FormInput;
