import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { HeaderComp } from "../header";
import { ResultComp } from "../result";
import {
  useNavigate
} from "react-router-dom";

// firebase
import { database } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './Admin.css';

const Exams = () => {
  return (
    <div className="exams-view">
      Exam Management - TODO
    </div>
  );
}

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
  const [examResults, setExamResults] = useState({});
  const [showExamResults, setShowExamResults] = useState(true);
  const [showExams, setShowExams] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  const showExamManagementView = () => {
    setShowExams(true);
    setShowExamResults(false);
  }

  const showExamResultsView = () => {
    setShowExams(false);
    setShowExamResults(true);
  }

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
        <div className={`exam-options ${showExamResults ? "exam-options__selected" : ""}`} onClick={showExamResultsView}>
          Exam Results
        </div>
        <div className={`exam-options ${showExams ? "exam-options__selected" : ""}`} onClick={showExamManagementView}>
          Exam Management
        </div>
      </div>
      {showExams && <Exams />}
      {showExamResults && <ExamResults examResults={examResults}/>}
    </div>);
}