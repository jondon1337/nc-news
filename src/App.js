import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllArticles } from "./components/AllArticles";
import { TopicArticles } from "./components/TopicArticles";
import { Nav } from "./components/Nav"
import { SingleArticle } from "./components/SingleArticle";
import { Comments } from "./components/Comments";

function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <div>
        <h1>Nc News</h1>
        <Routes>
          <Route
            path="/"
            element={<AllArticles  />}
          />
          <Route
            path="/topics/:topic_slug"
            element={<TopicArticles  />}
          ></Route>
          <Route
          path="/all_articles/article/:article_id"
          element={<SingleArticle />}
          ></Route>
          <Route
          path="/all_articles/article/:article_id/comments"
          element={<Comments />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
