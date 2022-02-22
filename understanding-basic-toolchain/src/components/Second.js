import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Second() {
  let x = useContext(UserContext);
  console.log(x);
  return (
    <>
      <h3 style={{ marginTop: "1rem" }}>component second:</h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{x.username}</td>
            <td>{x.name}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Second;
