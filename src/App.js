import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AllArticles } from './components/All_Articles';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <p>Nc News</p>
        <Routes>
          {/* <Route path = "/" element={<Home />} /> */}
          <Route path="/" element={<AllArticles />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
