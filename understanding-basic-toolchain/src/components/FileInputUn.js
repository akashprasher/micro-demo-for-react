import React from "react";

class FileInputUn extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert("your email is " + this.text.current.value);
  };

  render() {
    return (
      <>
        <form className="form-one" onSubmit={this.handleSubmit}>
          <h2>UNControlled Component</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            ref={this.text}
            placeholder="Enter Your Email"
          />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default FileInputUn;
