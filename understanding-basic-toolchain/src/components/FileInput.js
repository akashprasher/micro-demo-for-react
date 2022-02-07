import React from "react";
// import { ReactDOM } from "react";

class SelectTag extends React.Component {
  constructor(props) {
    super();
    this.fileInput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.fileInput.current.files[0].name);
    alert(this.fileInput.current.files[0].name);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-one">
          {/*onSubmit={this.handleSubmit}*/}
          <h2>UNControlled Component</h2>
          <label>Choose a Local File</label>
          <input type="file" ref={this.fileInput} />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}
export default SelectTag;
