import React from "react";
// import { ReactDOM } from "react";

class TextArea extends React.Component {
  constructor(props) {
    super();
    this.state = {
      bio: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ bio: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.bio) {
      alert("Your email is " + this.state.bio);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-one">
          <h2>Controlled Component</h2>
          <label htmlFor="email">Your Message</label>
          <textarea
            rows="5"
            value={this.state.bio}
            onChange={this.handleInputChange}
            placeholder="Enter Your Email"
          ></textarea>
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}
export default TextArea;
