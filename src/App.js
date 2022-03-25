// navgiation
import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Comps
import { LandingPageComp } from "./components/landingPage";
import { ExamComp } from "./components/exam";
import { AdminComp } from "./components/admin";
import { LoginComp } from "./components/login";
import { IntroductionComp } from "./components/exam/example";
import { EndComp } from "./components/exam/end";
import { ExamSelectionComp } from "./components/exam/examSelect";

// styles
import './App.css';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const App = () => {
  const query = useQuery();
  const examId = query.get("examId");
  if (examId) localStorage.setItem("examId", examId);

  return (
    <div className="App">
        <Routes>
            <Route path="/" exact element={<LandingPageComp />} />
            <Route path="/exam/example" element={<IntroductionComp />} />
            <Route path="/exam/select" element={<ExamSelectionComp />} />
            <Route path="/exam" element={<ExamComp />} />
            <Route path="/exam/end" element={<EndComp />} />
            <Route path="/admin" element={<AdminComp />} />
            <Route path="/login" element={<LoginComp />} />
            <Route path="*" element={<div>404 ERROR - PAGE NOT FOUND - TODO</div>} />
        </Routes>
    </div>
  );
}

export default App;
