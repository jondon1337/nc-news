import { useState } from "react";
import { deleteComment } from "../utils/api";


export default function Delete ({comment_id, setDeleted}) {
 
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClick = () => {
    setButtonDisabled(true);
    deleteComment(comment_id)
      .then(() => setDeleted(true))
      .catch(() => {
        setButtonDisabled(false);
      }) 
  };
  return (
    <>
      {/* <p id="comment-error-message">{err}</p> */}
      <button
        className="comment-delete-button"
        disabled={buttonDisabled}
        onClick={() => handleClick()}
      >
        Delete
      </button>
    </>
  );
};
