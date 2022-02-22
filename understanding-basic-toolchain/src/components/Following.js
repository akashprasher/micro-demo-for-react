import { withEnhancement } from "./withEnhancment";
import Users from "./Users";
import Loader from "./Loader";
import First from "./First";

let Following = (props) => {
  return (
    <>
      <h1>Following</h1>
      <ul>
        <ul>{props.data ? <Users data={props.data} /> : <Loader />}</ul>
        <First />
      </ul>
    </>
  );
};

export default withEnhancement(
  Following,
  "https://api.github.com/users/withshubh/following"
);
