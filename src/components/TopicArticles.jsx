import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import { ArticleCard } from "./ArticleCard";

export const TopicArticles = () => {
  const [topicArticles, setTopicArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {topic_slug} = useParams();

  useEffect(() => {
    getArticlesByTopic(topic_slug).then((data) => {
      setTopicArticles(data);
    });
    setIsLoading(false);
  }, [topic_slug]);

  if (isLoading) return <p>loading....</p>;
  return (
    <main>
      <section>
        <ul>
          {topicArticles.map((article, index) => {
            return (
              <ArticleCard
                key={`card-${index}`}
                {...article}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};
