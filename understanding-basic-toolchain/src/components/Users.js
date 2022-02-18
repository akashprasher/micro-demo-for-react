let User = (props) => {
  return props.data.map((el) => (
    <li key={el.login}>
      <a href={el.html_url}>
        <img
          style={{ height: "50px", display: "flex" }}
          src={el.avatar_url}
          alt="el.login"
        />
      </a>
    </li>
  ));
};

export default User;
