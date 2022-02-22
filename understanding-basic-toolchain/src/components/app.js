import React from "react";
import { UserContext } from "./context/UserContext";
import Followers from "./Followers";
import Following from "./Following";

// userContext;

let App = () => {
  return (
    <UserContext.Provider value={{ username: "recursion", name: "recur sion" }}>
      {/* value can be anything, like its can be taken from a state */}
      <Following />
      <Followers />
    </UserContext.Provider>
  );
};

export default App;
