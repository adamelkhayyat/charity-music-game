import { useState } from "react";

// comps
import { HeaderComp } from "../header";
import { ListeningComp } from "../listening"

// navigation
import { useNavigate } from "react-router-dom";

// firebase
import { savePreExam } from "../../firebase"

export const PreExamComp = () => {
  const navigate = useNavigate();
    
  const [answered, setAnswered] = useState(false);
  const [showPreExam, setShowPreExam] = useState(false);
  const [question, setQuestion] = useState(null);

  const finishInitialExam = (result, examName) => {
    console.log(result);
    const {config: configAll, soundCaught} = result;
    const {onDone, ...config} = configAll;
    const examResult = {soundCaught, config};
    const userEmail = localStorage.getItem('user-email');
    const username = userEmail.split("@")[0];

    savePreExam(examName, username, examResult);
    setAnswered(true);
  }
  
  const continueToExam = () => {
    navigate('/exam');
  }
  
  const PreExamQuestion = ({question}) => {
    return (
      <>
        <ListeningComp config={question} />
        { answered ? <button className="exam-intro__start-button exam-control-btn" onClick={() => continueToExam()}>Doorgaan →</button> : null }
      </>
    );
  }

  const setPreExam = (examNum) => {
    const preExam = {
      stage: "Pre-test",
      type: "listening",
      title: "Pre-test",
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20A%20-%20melody%20exam.mp3?alt=media&token=1e256ec8-0904-4c2c-82f6-f84083a3a83d",
      // audioSrc: "https://soundbible.com/mp3/alien-spaceship_daniel_simion.mp3",
      message: "Luister ALLEEN naar de piano. Als je een fout hoort druk je zo snel mogelijk op de spatiebalk! Let op, in de drums zitten ook fouten, probeer die te negeren! Dus alleen op de spatiebalk drukken als de piano een fout maakt!!!",
      topTip: "Tip: Pre-exam!",
      bellInstances: [
        {
          time: 5,
        },
        {
          time: 10,
        },
      ],
      onDone: (soundCaught, config) => finishInitialExam({soundCaught, config}, "preExam"),
    };

    const postExam = {
      stage: "Post-test",
      type: "listening",
      title: "Post-test",
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FStage%20A%20-%20melody%20exam.mp3?alt=media&token=1e256ec8-0904-4c2c-82f6-f84083a3a83d",
      // audioSrc: "https://soundbible.com/mp3/alien-spaceship_daniel_simion.mp3",
      message: "Luister ALLEEN naar de piano. Als je een fout hoort druk je zo snel mogelijk op de spatiebalk! Let op, in de drums zitten ook fouten, probeer die te negeren! Dus alleen op de spatiebalk drukken als de piano een fout maakt!!!",
      topTip: "Tip: Post-exam!",
      bellInstances: [
        {
          time: 5,
        },
        {
          time: 10,
        },
      ],
      onDone: (soundCaught, config) => finishInitialExam({soundCaught, config}, "postExam"),
    };

    if (examNum === 0) {  // pre-exam
      setQuestion(preExam);
    } else if (examNum === 1) { // post-exam
      setQuestion(postExam);
    }

    setShowPreExam(true);
  }

  const PreExamChoice = () => {
    return (
      <>
        <h2>Welkom, kies hieronder een optie:</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button className="button-exam-control" onClick={() => setPreExam(0)}>Pre-Exam</button>
          <button className="button-exam-control" onClick={() => setPreExam(1)}>Post-exam</button>
        </div>
      </>
    );
  }

  return (
    <div className="exam">
      <HeaderComp />
      <hr />
      { !showPreExam && <PreExamChoice /> }
      { (showPreExam && question) && <PreExamQuestion question={question} /> }
    </div>
  )
}