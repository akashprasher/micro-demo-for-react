// const getMessage = () => "Hello World";
// document.getElementById("root");

let articles = [
  {
    title: "City Lights in New York",
    date: new Date("2017-01-26"),
    comments: 67,
    subTitle: "The city that never sleeps.",
    description:
      "New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.",
    category: "photos",
    imageURL:
      "https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Twitter’s decentralized future",
    date: new Date("2021-01-16"),
    comments: 43,
    subTitle: "The decentralized future of twitter.",
    description:
      "The platform’s vision of a sweeping open standard could also be the far-right’s internet endgame",
    category: "social network",
    imageURL:
      "https://techcrunch.com/wp-content/uploads/2019/09/twitter-hidden-replies1.png?resize=1536,816",
  },
  {
    title: "Startups look beyond lidar for autonomous vehicle perception",
    date: new Date("2017-07-26"),
    comments: 17,
    subTitle:
      "Lidar pushed ahead of traditional cameras because it could do things they couldn’t",
    description:
      "Last CES was a time of reckoning for lidar companies, many of which were cratering due to a lack of demand from a (still) non-existent autonomous vehicle industry. ",
    category: "future",
    imageURL:
      "https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-846875220.jpg?w=1390&crop=1",
  },
];

const Article = (props) => {
  let calcDate = new Date().getTime() - props.article.date.getTime();
  let days = parseInt(calcDate / (1000 * 3600 * 24));
  let time = days > 30 ? parseInt(days / 7) + " weeks Ago" : days + "days Ago";
  return (
    <div className="p-3 pb-5 col-sm card mx-1">
      <img className="card-img" src={props.article.imageURL} />
      <div className="card-body">
        <h5 className="card-title">{props.article.title}</h5>
        <h6 className="card-title">{props.article.subTitle}</h6>
        <p className="card-text">{props.article.description}</p>
        <div className="row card-comments">
          <div className="col-sm-6">{time}</div>
          <div className="col-sm-6">{props.article.comments} Comments</div>
        </div>
      </div>
    </div>
  );
};

const Articles = (props) =>
  props.articles.map((article) => <Article article={article} />);

const HtmlBody = (props) => (
  <div className="container py-5">
    <div className="text-center mb-5">
      <h1>All Articles</h1>
      <h3>Collection of best Articles on startups</h3>
    </div>
    <div className="row">
      <Articles articles={articles} />
    </div>
  </div>
);

ReactDOM.render(
  <HtmlBody articles={articles} />,
  document.getElementById("root")
);
