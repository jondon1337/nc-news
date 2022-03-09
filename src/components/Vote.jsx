// import { patchVoteById } from "../utils/api";
// import { useState } from "react";

// const [voteIncrement, setVoteIncrement] = useState(0);

// const handleVote = (voteIncrement) => {
//   setVoteIncrement((currVote) => currVote + voteIncrement);
//   patchVoteById( voteIncrement ).catch(() => {
//     setVoteIncrement((currVote) => currVote - voteIncrement);
//   });
// };
// return (
// <section>
//   <dt>
//     <strong>
//       <button
//         className="button_inc"
//         disabled={voteIncrement === 1}
//         onClick={handleVote(1)}
//       >
//         +
//       </button>
//     </strong>{" "}
//     {props.votes}
//   </dt>
//   <dt>
//     <strong>
//       <button
//         className="button_inc"
//         disabled={voteIncrement === -1}
//         onClick={handleVote(-1)}
//       >
//         -
//       </button>
//     </strong>{" "}
//     {props.votes}
//   </dt>
// </section>;

// )
