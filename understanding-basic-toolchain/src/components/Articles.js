import React from "react";
import articles from "../data.json";

const Articles = () => (
  <div className="articles container">
    {articles.map((article) => (
      <Article key={article.title} articleData={article}></Article>
    ))}
  </div>
);

const Article = (props) => {
  return (
    <div>
      <img className="article-img" src={props.articleData.imgURL} />
      <h4>{props.articleData.title}</h4>
    </div>
  );
};

export default Articles;
