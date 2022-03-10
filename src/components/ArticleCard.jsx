import { Link } from "react-router-dom";
import { HandleVote } from "./HandleVote";
import { useState } from "react";

export const ArticleCard = (props) => {
  
  const [votes, setVotes] = useState(props.votes);

  return (
    <li className="articleCard" key={props.article_id}>
    
        <h3></h3>
        <dl>
          <br></br>
          <Link 
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          margin: "5px",
          padding: "10px",
          border: "double",
          color: "black",
          fontFamily: "sans-serif",
        }}
        to={`/all_articles/article/${props.article_id}`}
      >
          <dt>{props.title}</dt>
          </Link>
          <br></br>
          <dt>{props.body}</dt>
          <br></br>
          <dt>
            <strong>Article id:</strong> {props.article_id}
          </dt>
          <dt>
            <strong>Topic:</strong> {props.topic}
          </dt>
          <dt>
            <strong>Author:</strong> {props.author}
          </dt>
          <dt>
              <HandleVote setVotes={setVotes} votes={votes} article_id={props.article_id} />
          </dt>
                
          <dt>
            <strong>Comments:</strong> {props.comment_count}
          </dt>
          <dt>{props.created_at}</dt>
        </dl>
      
    </li>
    
  );
};
