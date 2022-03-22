import { useState, useEffect, useRef } from "react";

// comps
import { HeaderComp } from "../header";
import { ListeningComp } from "../listening"
import { QuestionComp } from "../question";

// navigation
import { useNavigate } from "react-router-dom";

// exam config
import { examAConfig, examBConfig } from "../../examConfig"

// firebase
import { saveResult } from "../../firebase"

import './Exam.css';

export const Stage = {
  STAGE_A1: "StageA1",
  STAGE_A2: "StageA2",
  STAGE_B1: "StageB1",
  STAGE_B2: "StageB2",
  STAGE_C1: "StageC1",
  STAGE_C2: "StageC2",
  STAGE_D1: "StageD1",
  STAGE_D2: "StageD2",
}

export const ExamComp = () => {
  const navigate = useNavigate();
  
  let results = useRef([]);
  const [examConfig, setExamConfig] = useState();
  const [startTime, setStartTime] = useState();
  const [answered, setAnswered] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [stage, setStage] = useState(null);

  // start up, componentDidMount
  useEffect(() => {
    // exam states
    const examId = localStorage.getItem("examId");

    switch (parseInt(examId)) {
      case 1:
        const stagesExam1 = Object.values(examAConfig).splice(1,4);
        setExamConfig(stagesExam1);
        setCurrentStageIndex(0);
        break;
      case 2:
        const stagesExam2 = Object.values(examBConfig).splice(1,4);
        setExamConfig(stagesExam2);
        setCurrentStageIndex(0);
        break;
      default:
        throw new Error("Unknown exam ID.");
    }

    setStartTime(new Date().getTime());
  }, []);

  const addResults = (result) => {
    const {config, ...rest} = result;
    const {onDone, ...restConfig} = config;

    const adjustedResult = {
      ...rest,
      exerciseType: config.stage,
      config: restConfig
    }

    results.current = [...results.current, adjustedResult]
    setAnswered(true);
  }

  // TODO: continnue here.
  const nextExercise = () => {
    const currentStage = stage;
    setAnswered(false);

    if (currentQuestionIndex >= currentStage.length - 1) {
      if (currentStageIndex < 3) {
        setCurrentStageIndex(currentStageIndex + 1);
      } else {
        // end.
          const userEmail = localStorage.getItem('user-email');
          const username = userEmail.split("@")[0];
          const examName = `exam${localStorage.getItem("examId")}`;
          const endTime = new Date().getTime();
          const timeTaken = `${Math.round((endTime - startTime) / 60000)} minutes`;
    
          saveResult(examName, username, results.current, timeTaken);
          navigate('/exam/end');
      }
    } else {
      const newQIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newQIndex);
    }
  }

  useEffect(() => {
    if(examConfig && currentStageIndex >= 0){
      switch (currentStageIndex) {
        case 0: // A
          const stage1 = examConfig[currentStageIndex].stageAConfig(addResults);
          setStage(stage1);
          break;
          case 1: // B
          const stage2 = examConfig[currentStageIndex].stageBConfig(addResults);
          setStage(stage2);
          break;
        case 2: // C
          const stage3 = examConfig[currentStageIndex].stageCConfig(addResults);
          setStage(stage3);
          break;
        case 3: // D
          const stage4 = examConfig[currentStageIndex].stageDConfig(addResults);
          setStage(stage4);
          break;
        default:
          throw new Error("No stage found!");
      }

      setCurrentQuestionIndex(0);
    }
  }, [currentStageIndex, examConfig]);

  const CurrentExamQuestion = ({question}) => {
    return (
      <>
        { question.type === "question" ?  <QuestionComp config={question} /> : <ListeningComp config={question} /> }
        { answered ? <button className="exam-intro__start-button" onClick={() => nextExercise()}>Doorgaan →</button> : null }
      </>
    );
  }

  const CompleteExamComp = () => {
    return (
      <div>
        {
          stage ?
          (
              <>
                <h2 id="exam-progress">{stage[currentQuestionIndex].stage}: Oefening {currentQuestionIndex + 1}</h2>
                <CurrentExamQuestion question={stage[currentQuestionIndex]} />
              </>
          ) : null
        }
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