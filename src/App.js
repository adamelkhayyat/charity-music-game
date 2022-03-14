import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

// Comps
import { LandingPageComp } from "./components/landingPage";
import { ResultComp } from "./components/result";
import { ExamComp } from "./components/exam";
import { AdminComp } from "./components/admin";

// styles
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const navigateToResults = (results) => {
    setResults(results);
    navigate('/result');
  }

  return (
    <div className="App">
        <Routes>
            <Route path="/" exact element={<LandingPageComp />} />
            <Route path="/exam" element={<ExamComp onDone={navigateToResults}/>} />
            <Route path="/result" element={<ResultComp results={results} />} />
            <Route path="/admin" element={<AdminComp />} />
            <Route path="*" element={<div>404 ERROR - PAGE NOT FOUND - TODO</div>} />
        </Routes>
    </div>
  );
}

export default App;
