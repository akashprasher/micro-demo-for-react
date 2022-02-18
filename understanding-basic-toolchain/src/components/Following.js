import { withEnhancement } from "./withEnhancment";
import Users from "./Users";
import Loader from "./Loader";

let Following = (props) => {
  return (
    <>
      <h1>Following</h1>
      <ul>
        <ul>{props.data ? <Users data={props.data} /> : <Loader />}</ul>
      </ul>
    </>
  );
};

export default withEnhancement(
  Following,
  "https://api.github.com/users/withshubh/following"
);
