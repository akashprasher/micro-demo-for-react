import React from "react";
// import FormInput from "./FormInput";
// import FileInputUn from "./FileInputUn";
// import TextArea from "./TextArea";
// import SelectTag from "./SelectTag";
import FileInput from "./FileInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  render() {
    return (
      <div className="container wrapper">
        {/* <FormInput /> */}
        {/* <FileInputUn /> */}
        {/* <TextArea /> */}
        {/* <SelectTag /> */}
        <FileInput />
      </div>
    );
  }
}

export default App;
