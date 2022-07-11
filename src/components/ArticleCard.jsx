import { Link } from "react-router-dom";
import { HandleVote } from "./HandleVote";
import { useState } from "react";


export const ArticleCard = (props) => {
  const [comment, setComment] = useState();

  const date = new Date(Date.parse(props.created_at))


  return (
    <li className="articleCard" key={props.article_id}>
      <dl>
        <br></br>
        <Link
        
          to={`/all_articles/article/${props.article_id}`}
        >
          <dt className="article__title"> {props.title}</dt>
        </Link>
        <br></br>
        <dt>{props.body}</dt>
        <br></br>
        <dt className="article__id">
          <strong>Article id:</strong> {props.article_id}
        </dt>
        <dt className="article__topic">
          <strong>Topic:</strong> {props.topic}
        </dt>
        <dt className="article__author">
          <strong>Author:</strong> {props.author}
        </dt>
        <dt>
          <HandleVote
            votes={props.votes}
            article_id={props.article_id}
          />
        </dt>
        
        <Link to={`/all_articles/article/${props.article_id}/comments`}>
          <dt className="article__comments" comment={comment} setComment={setComment}>
          <strong>Comments:</strong> {props.comment_count} 
          </dt>
        </Link>
        <dt className="article__date">{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</dt>
      </dl>
    </li>
  );
};
