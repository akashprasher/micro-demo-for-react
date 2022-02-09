import React from "react";
import Loader from "./Loader";

class App extends React.Component {
  constructor(props) {
    super();
    console.log("Constructor!");
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    if (!this.state.data) {
      return (
        <>
          <Loader />
        </>
      );
    }
    return (
      <>
        <div className="container">
          <nav>
            <h3>Data Fetching</h3>
          </nav>
          <div>
            {this.state.data.map((post) => {
              return (
                <li className="title-card" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
