import { withEnhancement } from "./withEnhancment";
import Users from "./Users";
import Loader from "./Loader";
import Second from "./Second";

let Follower = (props) => {
  return (
    <>
      <h1>Follower</h1>
      <ul>{props.data ? <Users data={props.data} /> : <Loader />}</ul>
      <Second />
    </>
  );
};

export default withEnhancement(
  Follower,
  "https://api.github.com/users/withshubh/followers"
);
