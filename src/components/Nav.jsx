import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getTopics } from "../utils/api"


export const Nav = () => {

    const [allTopics, setAllTopics] = useState([]);

    useEffect(() => {
        getTopics().then((data) => {
          setAllTopics(data);
        });
      }, []);
    


  return (
    <main>
      <section>
        {allTopics.map((topic, index) => {
          return (
            <Link key={`topicList${index}`} to={`/topics/${topic.slug}`}>
              <button  value={topic.slug}>
                {topic.slug}
              </button>
            </Link>
          );
        })}
      </section>

      <nav>
        <Link to="/">Home Page</Link>
      </nav>
    </main>
  );
};
