import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      date: new Date(),
      visibilty: true,
      btn: "Hide Timer",
    };
    this.timer = null;
    this.x = 0;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Not work because we haven't unmounted anyway for this perticular case

  handleClick = () => {
    this.setState((prevState) => {
      return {
        visibilty: prevState.visibilty ? false : true,
      };
    });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="mainn">
            <h1>
              {this.state.visibilty
                ? this.state.date.toLocaleTimeString()
                : "Time is Hidden"}
            </h1>
            <br />
            <button onClick={() => this.handleClick()}>
              {this.state.visibilty ? this.state.btn : "Show Timer"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
