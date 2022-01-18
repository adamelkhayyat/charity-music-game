import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// Comps
import { ExerciseComp } from "./components/exercise";
import { LandingPageComp } from "./components/landingPage";
import { ResultComp } from "./components/result";

// styles
import './App.css';

const App = () => {
  const navigate = useNavigate();
  
  const navigateToResults = () => {
    navigate('/result');
  }

  return (
    <div className="App">
        <Routes>
            <Route index element={<LandingPageComp />} />
            <Route path="/tutorial" element={<div>Tutorial page - TODO</div>} />
            <Route path="/exercise" element={<ExerciseComp onExerciseEnd={navigateToResults} />} />
            <Route path="/result" element={<ResultComp />} />
            <Route path="/admin" element={<div>Admin page - TODO</div>} />
            <Route path="*" element={<div>404 ERROR - PAGE NOT FOUND - TODO</div>} />
        </Routes>
    </div>
  );
}

export default App;
