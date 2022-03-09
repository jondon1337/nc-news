import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllArticles } from "./components/All_Articles";
import { TopicArticles } from "./components/TopicArticles";
import { useState } from "react";
import { Nav } from "./components/Nav"
import { SingleArticle } from "./components/SingleArticle";

function App() {
  const [queryTopic, setQueryTopic] = useState("");

  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <p>Nc News</p>
        <Routes>
          <Route
            path="/"
            element={<AllArticles setQueryTopic={setQueryTopic} />}
          />
          <Route
            path="/topics/:topic_slug"
            element={<TopicArticles topic={queryTopic} setQueryTopic={setQueryTopic} />}
          ></Route>
          <Route
          path="/all_articles/article/:article_id"
          element={<SingleArticle />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
