import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getTopics } from "../utils/api"


export const Nav = (props) => {

    const [allTopics, setAllTopics] = useState([]);

    useEffect(() => {
        getTopics().then((data) => {
          setAllTopics(data);
        });
      }, []);
    

    function handleTopic(event) {
        const selected = event.target.value;
        props.setQueryTopic(selected);
      }

  return (
    <main>
      <section>
        {allTopics.map((topic, index) => {
          return (
            <Link to={`/topics/${topic.slug}`}>
              <button key={index} value={topic.slug} onClick={handleTopic}>
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
