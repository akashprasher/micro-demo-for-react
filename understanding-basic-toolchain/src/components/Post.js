import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

let Post = () => {
  let params = useParams();
  let postId = params.postId;
  let [postData, setPostData] = useState({});

  useEffect(() => {
    requestPostData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPostData() {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    let jsonRes = await res.json();
    setPostData(jsonRes);
  }

  let loader = () => <Loader />;
  let post = () => {
    return (
      <>
        <div className="container" style={{ minHeight: "92vh" }}>
          <h2 className="heading">{postData.title}</h2>
          <p>{postData.body}</p>
        </div>
      </>
    );
  };

  return <>{Object.keys(postData).length > 0 ? post() : loader()}</>;
};

export default Post;
