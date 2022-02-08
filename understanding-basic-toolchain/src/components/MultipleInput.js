import React from "react";

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    alert(this.state.username + " and " + this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <label htmlFor="user">Username</label>
        <input
          value={this.state.username}
          onChange={this.handleInput}
          name="username"
          id="user"
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          value={this.state.password}
          onChange={this.handleInput}
          name="password"
          id="password"
          type="password"
        />
        <input type="submit" valur="submit" />
      </form>
    );
  }
}

export default MultipleInput;
