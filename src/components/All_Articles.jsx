import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";

export const AllArticles = (props) => {
  const [allArticles, setAllArticels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((data) => {
      setAllArticels(data);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>loading...</p>;

  return (
    <main>
      <section className="all-articles_container">
        <ul>
          {allArticles.map((article, index) => {
            return (
             
                <ArticleCard key={index} {...article} />
            
            );
          })}
        </ul>
      </section>
    </main>
  );
};
