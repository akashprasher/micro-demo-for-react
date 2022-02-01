import React from "react";

const articles = [
  {
    title:
      "Robot performs keyhole surgery on pigs with little help from doctors",
    imgURL:
      "https://images.newscientist.com/wp-content/uploads/2022/01/26145254/PRI_220290578.jpg",
  },
  {
    title:
      "AI can spot wounded wild animals and poachers in camera trap footage",
    imgURL:
      "https://images.newscientist.com/wp-content/uploads/2022/01/25172736/PRI_220103116.jpg",
  },
  {
    title: "Quantum computers are a million times too small to hack bitcoin",
    imgURL:
      "https://images.newscientist.com/wp-content/uploads/2022/01/25141443/PRI_220117106.jpg",
  },
  {
    title: "Meta is building the world's largest AI-specific supercomputer",
    imgURL:
      "https://images.newscientist.com/wp-content/uploads/2022/01/24154702/PRI_220002623.jpg",
  },
  {
    title: "Human and robot chemists work better together than alone",
    imgURL:
      "https://images.newscientist.com/wp-content/uploads/2022/01/21172606/PRI_219533454.jpg",
  },
  {
    title:
      "Infrared goggles and vibrating armband help people who are blind ‘see’",
    imgURL:
      "https://images.newscientist.com/wp-content/uploads/2022/01/21142304/PRI_219502244.jpg",
  },
];

const Articles = () => {
  return articles.map((article) => {
    return <Article title={article.title} imgURL={article.imgURL} />;
  });
};

const Article = (props) => {
  return (
    <div>
      <img className="article-img" src={props.imgURL} />
      <h4>{props.title}</h4>
    </div>
  );
};

export default Articles;
