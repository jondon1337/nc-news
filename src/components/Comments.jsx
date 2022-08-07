import { useEffect, useState, useContext } from "react";
// import { UserContext } from "../contexts/UserContext";
import { getCommentsById } from "../utils/api";
import { useParams } from "react-router-dom";
import { AddComment } from "./AddComment";
import Delete from "./Delete";

import { HandleVote } from "./HandleVote";

export const Comments = (author) => {

  const [comments, setComments] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { article_id } = useParams();
  // const { loggedInUser } = useContext(UserContext);
  // const isUserComment = loggedInUser === author;
  

  useEffect(() => {
    getCommentsById(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  if (deleted) return <p>Comment deleted</p>;

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
                <dt className="comment__title">Comment Id: {comment_id}</dt>
                <br></br>
                <dt>comment: {body}</dt>
                <br></br>
                <dt className="comment__author">Author: {author}</dt>
                <br></br>
                <dt className="comment__votes">Votes: {votes}</dt>
                <HandleVote 
                
                votes={votes}
                comment_id={comment_id}
                />
                <br></br>
                <dt className="comment_date">{created_at}</dt>
                {/* { author ? ( */}
                  <Delete
                    comment_id={comment_id}
                    setDeleted={setDeleted}
                    setComments={setComments}
                    // isTempComment={isTempComment}
                  />
                {/* ) : (
                  ""
                )} */}
              </dl>
            </li>
          );
        })}
      </ul>
    </>
  );
};
