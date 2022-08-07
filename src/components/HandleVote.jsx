import { patchVoteById } from "../utils/api";
import { patchCommentVoteById } from "../utils/api";
import { useState } from "react";


export const HandleVote = (props) => {

const {article_id, comment_id}  = props;

const [voteIncrement, setVoteIncrement] = useState(0)



function voteCounter(num) {
  comment_id === undefined ?
    patchVoteById(article_id, num).catch(() => {
      setVoteIncrement((currVote) => currVote - num);
  }) :
    patchCommentVoteById(comment_id, num).catch(() => {
      setVoteIncrement((currVote) => currVote + num);
  });
  setVoteIncrement((currVote) => currVote + num);
};

  return (
    <section>
      <dt>
        <strong>
          <button
            className="button_inc"
            disabled={voteIncrement === 1}
            onClick={() => {voteCounter(1)}}  //step 1 funtion refrerence setvot
          >
            +
          </button>
        </strong>{" "}
        {props.votes + voteIncrement}
      </dt>
      <dt>
        <strong>Votes: </strong> {props.votes + voteIncrement}
      </dt>
      <dt>
        <strong>
          <button
            className="button_inc"
            disabled={voteIncrement === -1}
            onClick={() => {voteCounter(-1)}}
          >
            -
          </button>
        </strong>{" "}
        {props.votes + voteIncrement}
      </dt>
    </section>
  );
  //user vote persist -changes to the BE- local storage-stored in the browser passwords X cap per page reload 
};
