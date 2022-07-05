import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
// import avatar from "../assets/avatar.png";

export default function User() {
    const { loggedInUser } = useContext(UserContext);
    return (
      <section id="logged-in-user-card">
        {/* <img src={avatar} className="user-avatar" alt="logged in user avatar" /> */}
        <span id="logged-in-name">{loggedInUser}</span>
      </section>
    );
  }