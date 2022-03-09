import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";


export const AllArticles = () => {
  const [allArticles, setAllArticels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then((data) => {
        setAllArticels(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);


  if (isLoading)
    return (
      <main>
        <h2>loading...</h2>
      </main>
    );

  return (
    <main>
      <section className="all-articles_container">
        <ul>
          {allArticles.map((article, article_id) => {
            return <ArticleCard key={article_id} {...article} />;
          })}
        </ul>
      </section>
    </main>
  );
};
