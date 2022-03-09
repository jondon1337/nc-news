
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";

export const TopicArticles = () => {
  const [topicArticles, setTopicArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useParams();

  useEffect(() => {
  
    getArticlesByTopic(query.topic_slug).then((data) => {
      setTopicArticles(data);
    });
    setIsLoading(false);
  }, [query]);

  if (isLoading) return <p>loading....</p>;
  return (
    <main>
      <section>
        <ul>
          {topicArticles.map((article, index) => {
            return (
              <li key={index}>
                <Link style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          margin: "5px",
          padding: "10px",
          color: "black",
          fontFamily: "sans-serif"
        }}to={`/articles/${article.article_id}`}>
                  <ArticleCard key={index} {...article} />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
