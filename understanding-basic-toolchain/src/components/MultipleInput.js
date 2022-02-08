import React from "react";

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    const rge = /\S+@\S+\.\S+/;
    switch (name) {
      case "email":
        errors.email = rge.test(value) ? "" : "error in email";
        break;
      case "password":
        errors.password = value.length < 6 ? "error in password" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = () => {
    alert(this.state.username + " and " + this.state.password);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="container"
        autoComplete="off"
      >
        <label htmlFor="user">email</label>
        <input
          value={this.state.email}
          onChange={this.handleInput}
          name="email"
          id="user"
          type="email"
          className={this.state.errors.email ? "error" : ""}
        />
        <span className="error-msg">{this.state.errors.email}</span>
        <label htmlFor="password">Password</label>
        <input
          value={this.state.password}
          onChange={this.handleInput}
          name="password"
          id="password"
          type="password"
          className={this.state.errors.password ? "error" : ""}
        />
        <span className="error-msg">{this.state.errors.password}</span>
        <span>{}</span>
        <input
          className={
            this.state.errors.email && this.state.errors.password
              ? "disable"
              : ""
          }
          type="submit"
          valur="submit"
        />
      </form>
    );
  }
}

export default MultipleInput;
