import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";

export const AllArticles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  useEffect(() => {
    getAllArticles(sortBy, orderBy)
      .then((data) => {
        setAllArticles(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [allArticles, sortBy, orderBy]);

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
      <section className="all-articles_container">
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
          {allArticles.map((article, article_id) => {
            return <ArticleCard key={article_id} {...article} />;
          })}
        </ul>
      </section>
    </main>
  );
};
