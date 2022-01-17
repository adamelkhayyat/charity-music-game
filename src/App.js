import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

// Comps
import { ExerciseComp } from "./components/exercise";

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
            <Route index element={<div>Landing page - TODO</div>} />
            <Route path="/tutorial" element={<div>Tutorial page - TODO</div>} />
            <Route path="/exercise" element={<ExerciseComp onExerciseEnd={navigateToResults} />} />
            <Route path="/result" element={<div>Results page - TODO</div>} />
            <Route path="/admin" element={<div>Admin page - TODO</div>} />
            <Route path="*" element={<div>404 ERROR - PAGE NOT FOUND - TODO</div>} />
        </Routes>
    </div>
  );
}

export default App;
