import { patchVoteById } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const HandleVote = (props) => {

const {setVotes, votes} = props;

const [voteIncrement, setVoteIncrement] = useState(0)

const {article_id} = useParams(); 

// function voteCounter() {
//   setVoteIncrement((currVote) => currVote + voteIncrement);
//   patchVoteById(voteIncrement).catch(() => {
//     setVoteIncrement((currVote) => currVote - voteIncrement);
//   });
// }

  useEffect(() => { //step 2 see change(voteinc) run useeffect 
    setVotes((currVote) => currVote + voteIncrement) //step 3 optimist change on the api regardless of the api 
    patchVoteById(article_id, voteIncrement)  //step4 update the api call 
  }, [voteIncrement]);

  return (
    <section>
      <dt>
        <strong>
          <button
            className="button_inc"
            disabled={voteIncrement === 1}
            onClick={() => {setVoteIncrement(1)}}  //step 1 funtion refrerence setvot
          >
            +
          </button>
        </strong>{" "}
        {props.votes}
      </dt>
      <dt>
        <strong>
          <button
            className="button_inc"
            disabled={voteIncrement === -1}
            onClick={() => {setVoteIncrement(-1)}}
          >
            -
          </button>
        </strong>{" "}
        {props.votes}
      </dt>
    </section>
  );
  //user vote persist -changes to the BE- local storage-stored in the browser passwords X cap per page reload 
};
