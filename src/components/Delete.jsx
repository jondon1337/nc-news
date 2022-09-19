import { useState, useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "./UserContext";



export default function Delete({ comment_id, author }) {
  const [deleted, setDeleted] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  

  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
      setDeleted(true);
    });
  };

  if(author !== loggedInUser) {
    return <p className="deleted-text">Cannot delete another users comment</p>;
  } 

  if (deleted) {
    return <p className="deleted-text">Deleted</p>;
  }

  return (
    <>
      <button className="comment-delete-button" onClick={() => {handleDelete(comment_id)}}>
        Delete
      </button>
    </>
  );
}
