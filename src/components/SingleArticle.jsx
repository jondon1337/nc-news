import { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { useParams } from "react-router-dom";

export const SingleArticle = () => {

    const [articleById, setArticleById] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams()

    useEffect(() => {
      getArticleById(article_id).then((article) => {
          setArticleById(article)
          setIsLoading(false)
      });
    }, [article_id]);

    if(isLoading) return <p>loading...</p>

    return <ArticleCard {...articleById} />;
};