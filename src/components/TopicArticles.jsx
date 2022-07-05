import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import { ArticleCard } from "./ArticleCard";

export const TopicArticles = () => {
  const [topicArticles, setTopicArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  let { topic_slug } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic_slug, sortBy, orderBy).then((data) => {
      setTopicArticles(data);
    })
    .then(() => {
      setIsLoading(false);
    });
  }, [topic_slug, sortBy, orderBy]);

  const sorts = {
    created_at: "Date",
    votes: "Votes",
    comment_count: "Comments",
  };
  const orders = {
    asc: "Ascending",
    desc: "Descending",
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };
  const handleOrder = (event) => {
    setOrderBy(event.target.value);
  };

  if (isLoading)
    return (
      <main>
        <h2>loading...</h2>
      </main>
    );

  return (
    <main>
      <section>
        <select
          className="sort by"
          onChange={(event) => {
            handleSort(event);
          }}
        >
          <option className="option sortBy">
            {sortBy ? sorts[sortBy] : "Sort by"}
          </option>
          <option value="comment_count">Comments</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>

        <select
          className="orderby"
          onChange={(event) => {
            handleOrder(event);
          }}
        >
          <option className="option orderBy">
            {orderBy ? orders[orderBy] : "Asc/Desc"}
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <ul>
          {topicArticles.map((article, index) => {
            return <ArticleCard key={`card-${index}`} {...article} />;
          })}
        </ul>
      </section>
    </main>
  );
};
