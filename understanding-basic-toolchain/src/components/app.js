import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    console.log("Constructor!");
    this.state = {
      counter: 0,
      visible: "first",
    };
  }

  componentDidMount() {
    console.log("did mount?");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  render() {
    console.log("Render!");
    return (
      <>
        {/* <h1>{this.state.counter}</h1> */}
        {this.state.visible === "first" ? <First /> : <Second />}
        <button
          onClick={() => {
            this.setState({
              visible: this.state.visible === "first" ? "second" : "first",
            });
          }}
        >
          [ + ]
        </button>
      </>
    );
  }
}

class First extends React.Component {
  componentWillUnmount() {
    console.log("unmount first");
  }
  render() {
    return <h1>first</h1>;
  }
}

class Second extends React.Component {
  componentWillUnmount() {
    console.log("unmount second");
  }
  render() {
    return <h1>Second</h1>;
  }
}

export default App;
