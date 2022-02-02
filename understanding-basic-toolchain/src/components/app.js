import React from "react";
// import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = (operation) => {
    switch (operation) {
      case "in":
        this.setState({
          counter: this.state.counter + 1,
        });
        break;

      case "de":
        this.setState({
          counter: this.state.counter - 1,
        });
        break;

      case "re":
        this.setState({
          counter: 0,
        });
        break;
    }
  };

  render() {
    return (
      <center>
        <h1>Counter App !</h1>
        <h2 className="m-2">{this.state.counter}</h2>
        <button onClick={() => this.handleClick("in")} className="btn-in">
          Increment
        </button>
        <button onClick={() => this.handleClick("re")} className="btn-re">
          Reset
        </button>
        <button onClick={() => this.handleClick("de")} className="btn-de">
          Decrement
        </button>
      </center>
    );
  }
}

export default App;
