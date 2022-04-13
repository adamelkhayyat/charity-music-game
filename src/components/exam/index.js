import { useState, useEffect, useRef } from "react";

// comps
import { HeaderComp } from "../header";
import { ListeningComp } from "../listening"
import { QuestionComp } from "../question";
import { IntroductionComp } from "../exam/example";

// navigation
import { useNavigate } from "react-router-dom";

// exam config
import { examConfig as examConfiguration } from "../../examConfig"

// firebase
import { saveResult } from "../../firebase"

import './Exam.css';

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

const TimeoutOverlay = ({ time }) => {
  return (
    <div className="time-out">
      <div className="time-out-msg">
        <h1>Neem een pauze!</h1>
        <p>Je kunt verder in <b>{time}</b></p>
      </div>
    </div>
  )
}

export const ExamComp = () => {
  const navigate = useNavigate();
  
  let results = useRef([]);
  
  // TIMEOUT SECTION
  const [showTimeout, setShowTimeout] = useState(false);
  const [seconds, setSeconds] = useState(300);
  const [timeleft, setTimeleft] = useState("5:00");
  const [twentyMinTimer, setTwentyMinTimer] = useState(null);

  const TIMEOUT_MS = 1200000;  // 20min

  const startTwentyMinTimer = () => {
    const interval = setInterval(() => {
      setShowTimeout(true);
      setSeconds(300);
    }, TIMEOUT_MS)
    setTwentyMinTimer(interval);
  }

  const stopTwentyMinTimer = () => {
    clearInterval(twentyMinTimer);
    setTwentyMinTimer(null);
  }

  // 20min timer
  useEffect(() => {
    startTwentyMinTimer();  // start timer...
  }, [])

  // // 5min timer for pause/break overlay
  useEffect(() => {
    if (seconds > 0 && showTimeout) {
      // stop timer
      if (twentyMinTimer) stopTwentyMinTimer();
      setTimeout(() => {
        setSeconds(seconds - 1);
        setTimeleft(fmtMSS(seconds - 1));
      }, 1000);
    } else {
      setShowTimeout(false);
      if (twentyMinTimer === null) {
        startTwentyMinTimer();
      }
    }
  })

  const [examConfig, setExamConfig] = useState();
  const [startTime, setStartTime] = useState();
  const [answered, setAnswered] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [stage, setStage] = useState(null);

  // start up, componentDidMount
  useEffect(() => {
    const examConfig = Object.values(examConfiguration).splice(1,5);
    setExamConfig(examConfig);
    setCurrentStageIndex(0);

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
          const endTime = new Date().getTime();
          const timeTaken = `${Math.round((endTime - startTime) / 60000)} minutes`;
    
          saveResult('exam', username, results.current, timeTaken);
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
        case 0: // Tutorial
          const stageTutorial = examConfig[currentStageIndex].stageTutorialConfig(addResults);
          setStage(stageTutorial);
          break;
        case 1: // A
          const stage1 = examConfig[currentStageIndex].stageAConfig(addResults);
          setStage(stage1);
          break;
        case 2: // B
          const stage2 = examConfig[currentStageIndex].stageBConfig(addResults);
          setStage(stage2);
          break;
        case 3: // C
          const stage3 = examConfig[currentStageIndex].stageCConfig(addResults);
          setStage(stage3);
          break;
        case 4: // D
          const stage4 = examConfig[currentStageIndex].stageDConfig(addResults);
          setStage(stage4);
          break;
        default:
          throw new Error("No stage found!");
      }

      setCurrentQuestionIndex(0);
    }
  }, [currentStageIndex, examConfig]);

  const MessageComp = ({config}) => {
    const { mainContent, secondaryContent, topContent, bottomContent } = config;

      return (
        <div className="landing-page">
          <div className="exam-intro">
            <h2>{topContent}</h2>
            <p>{mainContent}</p>
            <p>{secondaryContent}</p>
            <h4>{bottomContent}</h4>
          </div>
        </div>
      )
  }

  
  const CurrentExamQuestion = ({question}) => {
    return (
      <>
        { question.type === "question" && <QuestionComp config={question} /> }
        { question.type === "listening" && <ListeningComp config={question} /> }
        { question.type === "tutorial" && <IntroductionComp config={question} /> }
        { question.type === "message" && <MessageComp config={question} /> }
        { (answered || question.type === "tutorial" || question.type === "message") ? <button className="exam-intro__start-button exam-control-btn" onClick={() => nextExercise()}>Doorgaan →</button> : null }
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
                { stage[currentQuestionIndex].title && <h2 id="exam-progress">{stage[currentQuestionIndex].title}</h2> }
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
        { showTimeout === true ? <TimeoutOverlay time={timeleft}/> : null}
    </div>
  )
}