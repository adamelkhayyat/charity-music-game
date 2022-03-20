import { useEffect, useState } from "react";

// comps
import { HeaderComp } from "../header";
import { ResultComp } from "../result";

// navigation
import {
  useNavigate
} from "react-router-dom";

// firebase
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './Admin.css';

const UserResult = ({result}) => {
  const [showResults, setShowResults] = useState(false);
  const [user, setUser] = useState({});
  const [examDetails, setExamDetails] = useState({});
  const [submitTime, setSubmitTime] = useState("");
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    if (result) {
      const { user, submittedAt, timeTaken, ...rest } = result;
      setUser(user);
      setSubmitTime(submittedAt);
      setTimeTaken(timeTaken);
      setExamDetails(rest);
    }
  }, [result])

  return (<div>
    <p onClick={() => setShowResults(!showResults)} className={`user-result ${showResults ? "user-result-open" : ""}`}>Results for <b>{user.name}</b></p>
    {showResults && <div className="user-result__content">
      <p>Submitted at: {submitTime}</p>
      <p>Time taken: {timeTaken}</p>
      <ResultComp results={examDetails}/>
    </div> }
  </div>);
}

const ExamResult = ({name, results}) => {
  const [showExamResults, setShowExamResults] = useState(false);

  return (
    <div>
      <p className="exam-result" onClick={() => setShowExamResults(!showExamResults)}>Exam: {name}</p>
      <div className={showExamResults ? "exam-result__content" : ""}>
        { showExamResults && results.map((result, i) => <UserResult key={i} result={result} />) }
      </div>
    </div>
  )
}

const ExamResults = ({examResults}) => {
  const [exams, setExams] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (examResults) {
      // Extract & set exams
      let examNames = Object.keys(examResults);
      examNames = examNames.map(name => name.split("-")[0]);

      // remove dups
      const exams = [...new Set(examNames)];
      setExams(exams);

      if (exams) {
        // Extract & set exams' results
        let finalResults = {};
        exams.forEach(exam => {
          finalResults[exam] = [];
        })
        
        // set up keys & value structure
        for (const [key, value] of Object.entries(examResults)) {
          const examName = key.split("-")[0];
          finalResults[examName] = (finalResults[examName]).concat(value);
        }

        setResults(finalResults);
      }
    }
  }, [examResults]);

  return (
      <div className="exam-results-view">
        {exams.map((examName, i) => <ExamResult key={i} name={examName} results={results[examName]} />)}
      </div>
    );
}

export const AdminComp = () => {
  const navigate = useNavigate();
  const [examResults, setExamResults] = useState({});
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    const starCountRef = ref(database, 'examResults/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setExamResults(data);
    });
  }, []);

  return (
    <div className="admin-panel">
      <HeaderComp />
      <hr />
      <h1>Admin Panel</h1>
      <div className="admin-panel__content">
        <div className="exam-options">
          Exam Results
        </div>
      </div>
      <ExamResults examResults={examResults}/>
    </div>);
}