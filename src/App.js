import {
  Routes,
  Route,
} from "react-router-dom";

// Comps
import { LandingPageComp } from "./components/landingPage";
import { ExamComp } from "./components/exam";
import { AdminComp } from "./components/admin";
import { LoginComp } from "./components/login";

// styles
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/" exact element={<LandingPageComp />} />
            <Route path="/exam" element={<ExamComp />} />
            <Route path="/admin" element={<AdminComp />} />
            <Route path="/login" element={<LoginComp />} />
            <Route path="*" element={<div>404 ERROR - PAGE NOT FOUND - TODO</div>} />
        </Routes>
    </div>
  );
}

export default App;
