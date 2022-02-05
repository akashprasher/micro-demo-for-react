import React from "react";
// import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  };

  render() {
    return (
      <>
        <div className="navigation">
          <div className="header container">
            <h3>User Details</h3>
            <button onClick={() => this.handleLoginClick()}>
              {this.state.isLoggedIn ? "Logout 📛" : "Login 🙌"}
            </button>
          </div>
        </div>
        <div className="container">
          {this.state.isLoggedIn ? <User /> : <Guest />}
        </div>
      </>
    );
  }
}

let User = () => {
  return (
    <div className="log-f">
      <h1>Welcome John! 🥳</h1>
    </div>
  );
};

let Guest = () => {
  return (
    <div className="log-f">
      <h1>Please Login First 🤹‍♀️🤹‍♂️🤹</h1>
    </div>
  );
};
export default App;
