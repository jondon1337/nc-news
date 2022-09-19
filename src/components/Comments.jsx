import { useEffect, useState } from "react";
import { getCommentsById } from "../utils/api";
import { useParams } from "react-router-dom";
import { AddComment } from "./AddComment";
import Delete from "./Delete";
import { HandleVote } from "./HandleVote";
import Moment from "moment";

export const Comments = () => {

  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  

  useEffect(() => {
    getCommentsById(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  

  return (
    <>
      <AddComment
        setComments={setComments}
        comments={comments}
        article_id={article_id}
      />
      <ul>
        {comments.map(({ body, author, votes, created_at, comment_id }) => {
          return (
            
            <li className="comments" key={comment_id}>
              <dl>
                <dt className="comment__title"><strong>Comment Id:</strong> {comment_id}</dt>
                <br></br>
                <dt><strong>comment:</strong> {body}</dt>
                <br></br>
                <dt className="comment__author"><strong>Author:</strong> {author}</dt>
                <br></br>
                <dt className="comment__votes"><strong>Votes:</strong> {votes}</dt>
                <HandleVote 
                
                votes={votes}
                comment_id={comment_id}
                />
                <br></br>
                <dt className="comment_date"><strong>posted:</strong> {Moment(created_at).format("DD-MM-YYYY")}</dt>
                  <Delete
                    comment_id={comment_id}
                    author={author}
                  />
              </dl>
            </li>
          );
        })}
      </ul>
    </>
  );
};
