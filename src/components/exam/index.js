import { useState, useEffect, useRef } from "react";

// comps
import { HeaderComp } from "../header";
import { ListeningComp } from "../listening"
import { QuestionComp } from "../question";

// navigation
import { useNavigate } from "react-router-dom";

// exam config
import { examAConfig, examBConfig, examCConfig, examDConfig } from "../../examConfig"

// firebase
import { saveResult } from "../../firebase"

import './Exam.css';

export const Stage = {
  STAGE_A0: "StageA",
  STAGE_A1: "StageA1",
  STAGE_A2: "StageA2",
}

export const ExamComp = () => {
  const navigate = useNavigate();
  
  let examConfig = useRef(null);
  
  const [loading, setLoading] = useState(true);
  const [startTime, setStartTime] = useState();

  useEffect(() => {
    // exam states
    console.log("comp");
    console.log(localStorage.getItem("examId"));
    const examId = localStorage.getItem("examId");
    console.log("examId", examId);

    switch (parseInt(examId)) {
      case 1:
        examConfig.current = examAConfig;
        break;
      case 2:
        examConfig.current = examBConfig;
        break;
      case 3:
        examConfig.current = examCConfig;
        break;
      case 4:
        examConfig.current = examDConfig;
        break;
      default:
        break;
    }

    setLoading(false);

    setStartTime(new Date().getTime());
  }, []);


  const [results, setResult] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [currentL, setCurrentL] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(1);
  const [currentQuestionType, setCurrentQuestionType] = useState(Stage.STAGE_A1);

  const addResults = (result) => {
    const adjustedResult = {
      ...result,
      exerciseNum: currentExercise,
      exerciseType: currentQuestionType
    }

    const updatedResults = [...results, adjustedResult]

    setResult(updatedResults);
    nextExercise(currentQuestionType);

    if (currentExercise >= maxQuestionCount && examConfig.current) {
      const userEmail = localStorage.getItem('user-email');
      const username = userEmail.split("@")[0];
      const examName = examConfig.current.examName;
      const endTime = new Date().getTime();
      const timeTaken = `${Math.round((endTime - startTime) / 60000)} minutes`;

      let stageA1Results = [];
      let stageA2Results = [];

      updatedResults.forEach(result => {
        if (result.exerciseType === "StageA1") {
          stageA1Results = stageA1Results.concat(result);
        } else if (result.exerciseType === "StageA2") {
          stageA2Results = stageA2Results.concat(result);
        }
      })

      console.log(timeTaken);
      saveResult(examName, username, stageA1Results, stageA2Results, timeTaken);
      navigate('/exam/end');
    }
  }

  console.log(examConfig.current ? examConfig.current.stageA1Config(addResults) : null);

  const questions = examConfig.current ? examConfig.current.stageA1Config(addResults) : null;
  const listening = examConfig.current ? examConfig.current.stageA2Config(addResults) : null;
  const maxQuestionCount = questions && listening ? questions.length + listening.length : null;

  const nextExercise = (type) => {
    // Stage A1 - same or diff questions
    if (type === Stage.STAGE_A1) {
      const nextQuestionIndex = currentQ + 1;
      (nextQuestionIndex < questions.length) ? setCurrentQ(nextQuestionIndex) : setCurrentQuestionType(Stage.STAGE_A2);
    } else {
      // Stage A2 - listening questions
      const nextListeningIndex = currentL + 1;
      if (nextListeningIndex < listening.length) setCurrentL(nextListeningIndex);
    }

    // next exercise if possible
    if (currentExercise <= maxQuestionCount) setCurrentExercise(currentExercise + 1);
  }

  const CompleteExamComp = () => {
    return (
      <div>
        <h2 id="exam-progress">{currentQuestionType}: Oefening {currentQuestionType === Stage.STAGE_A1 ? currentQ + 1 : currentL + 1}</h2>
        
        { examConfig.current && !loading ? (
          <>
            { currentQuestionType === Stage.STAGE_A1 ?  <QuestionComp config={questions[currentQ]} /> : <ListeningComp config={listening[currentL]} /> }
          </>
        ): null }
        
      </div>
    );
  }

  return (
    <div className="exam">
      <HeaderComp />
      <hr />
        <label className="exam-intro__hint"><i>Klik op de blauwe tegels met ▶ om de clips af te spelen.</i></label>
        <CompleteExamComp />
    </div>
  )
}