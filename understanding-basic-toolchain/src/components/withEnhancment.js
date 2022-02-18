import React from "react";

export function withEnhancement(Comp, url) {
  return class Enhancement extends React.Component {
    state = {
      data: null,
    };

    componentDidMount() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data });
        });
    }

    render() {
      return <Comp data={this.state.data} />;
    }
  };
}
