import { useState } from "react";

// comps
import { HeaderComp } from "../header";

// navigation
import { useNavigate } from "react-router-dom";


export const ExamSelectionComp = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const setExam = (examId) => {
    setLoading(true);
    localStorage.setItem("examId", examId);
    setTimeout(() => {
      navigate('/exam/example');
    }, 1000);
  }

  return (
    <div className="landing-page">
      <HeaderComp />
      <hr />
      { loading  ? <h1>Please wait...</h1> : (
        <>
          <h1>Select exam type:</h1>
          <div style={{display: "flex", flexDirection: "row"}}>
            <button className="button-exam-control" onClick={() => setExam(1)}>
              Melody
            </button>
            <button className="button-exam-control" onClick={() => setExam(2)}>
              Rythm
            </button>
          </div>
        </>
      ) }
    </div>
  );
}