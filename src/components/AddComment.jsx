import { useState } from "react";
import { postComment } from "../utils/api";

// import { UserContext } from "./User";
// import { useContext } from "react";

export const AddComment = ({ setComments, article_id }) => {
  const [comment, setComment] = useState("");
  // let { user } = useContext(UserContext);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      username: "jessjelly",
      body: comment,
    };
    if (comment.length < 1) {
      alert("please insert a comment");
    } else {
      postComment(article_id, newComment)
        .then((newComment) => {
          setComments((currentComments) => {
            return [newComment, ...currentComments];
          })
        })
        .catch((err) => {
          alert("something when wrong.");
        });
      alert("comment updated.");
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment Here:
        <input type="text" value={comment} onChange={handleChange} />
      </label>
      <button className="comment__submit" type="submit">
        Submit
      </button>
    </form>
  );
};