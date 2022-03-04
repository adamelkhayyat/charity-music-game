import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

// Comps
import { ExerciseComp } from "./components/exercise";
import { QuestionComp } from "./components/question";
import { LandingPageComp } from "./components/landingPage";
import { ResultComp } from "./components/result";
import { ExamComp } from "./components/exam";

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
            <Route path="/tutorial" element={<div>Tutorial page - TODO</div>} />
            {/* <Route path="/exercise" element={<ExerciseComp onExerciseEnd={navigateToResults} />} /> */}
            {/* <Route path="/exercise" element={<QuestionComp />} /> */}
            <Route path="/exam" element={<ExamComp onDone={navigateToResults}/>} />
            <Route path="/result" element={<ResultComp results={results} />} />
            <Route path="/admin" element={<div>Admin page - TODO</div>} />
            <Route path="*" element={<div>404 ERROR - PAGE NOT FOUND - TODO</div>} />
        </Routes>
    </div>
  );
}

export default App;
