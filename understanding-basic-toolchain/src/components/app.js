import React from "react";
// import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
    // console.log(event);
  };

  handleClick = () => {};

  render() {
    return (
      <>
        <div className="header">
          <h3>Understanding Input Events</h3>
        </div>
        <div className="container in-div">
          <input onChange={this.handleChange} type="text" />
          <button onClick={() => this.handleClick()}>Submit</button>
        </div>
        {/* <div>
          <p>{this.state.inputText}</p>
        </div> */}
      </>
    );
  }
}

export default App;
