import React from "react";
import Loader from "./Loader";

import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super();
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
          <div>
            {this.state.data.map((post) => {
              return (
                <li className="title-card" key={post.id}>
                  <h3 className="app-heading">{post.title}</h3>
                  <p>{post.body}</p>
                  <Link to={"/post/" + post.id}>
                    <button className="read-more-btn">Read More</button>
                  </Link>
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
