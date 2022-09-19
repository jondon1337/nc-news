import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { getTopics } from "../utils/api"
import { UserContext } from "./UserContext";

export const Nav = () => {

    const [allTopics, setAllTopics] = useState([]);
    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        getTopics().then((data) => {
          setAllTopics(data);
        });
      }, []);
    


  return (
    <main className="nav">
      <section>
        {allTopics.map((topic, index) => {
          return (
            <Link key={`topicList${index}`} to={`/topics/${topic.slug}`}>
              <button className="button" value={topic.slug}>
                {topic.slug}
              </button>
            </Link>
          );
        })}
      </section>
      <div>
        user:{loggedInUser}
      </div>

      <nav>
        <Link to="/">Home Page</Link>
      </nav>
      
    </main>
  );
};
