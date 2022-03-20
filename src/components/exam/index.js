import { useState } from "react";
import { HeaderComp } from "../header";
import { ListeningComp } from "../listening"
import { QuestionComp } from "../question";
// import { Link } from "react-router-dom";

// firebase
import { saveResult } from "../../firebase"

import './Exam.css';

export const Stage = {
  STAGE_A0: "StageA",
  STAGE_A1: "StageA1",
  STAGE_A2: "StageA2",
}

const ExampleQuestion = () => {
  const [answer, setAnswer] = useState(null);

  const CorrectAnswer = () => {
    return (
      <>
      🎉 <span style={{color: "green", paddingLeft: "5px"}}><b>Correct</b></span> - De audioclips zijn <i><u><b>anders</b></u></i>
      </>
    )
  }

  const WrongAnswer = () => {
    return (
      <>
      ❌ <span style={{color: "red", paddingLeft: "5px"}}><b>Fout</b></span> - De audioclips zijn <i><u><b>anders</b></u></i>
      </>
    )
  }

  const exampleQConfig = {
    mp3Url1: "https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3",
    mp3Url2: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
    correctAnswer: "different",
    onDone: (_, answerCorrect) => setAnswer(answerCorrect)
  };

  return (
    <div className="exam-intro__example">
      <QuestionComp config={exampleQConfig} />
      { answer !== null ? <label>
        { answer && <CorrectAnswer /> }
        { !answer && <WrongAnswer /> }
        </label> : null }
    </div>
  )
}

export const ExamComp = ({ onDone }) => {
  // status states
  const [started, setStarted] = useState(false);
  const [end, setEnd] = useState(false);
  
  // exam states
  const [results, setResult] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [currentL, setCurrentL] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(1);
  const [currentQuestionType, setCurrentQuestionType] = useState(Stage.STAGE_A1);

  const getQuestionsConfig = () => {
    const q1Config = {
      mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
      mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
      correctAnswer: "same",
      onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
    };

    const q2Config = {
      mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
      mp3Url2: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
      correctAnswer: "different",
      onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
    };

    const q3Config = {
      mp3Url1: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
      mp3Url2: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
      correctAnswer: "same",
      onDone: (reactionTime, answerCorrect) => addResults({reactionTime, answerCorrect})
    };

    return [q1Config, q2Config, q3Config];
  }

  const addResults = (result) => {
    const adjustedResult = {
      ...result,
      exerciseNum: currentExercise,
      exerciseType: currentQuestionType
    }

    const updatedResults = [...results, adjustedResult]

    setResult(updatedResults);
    nextExercise(currentQuestionType);

    if (currentExercise >= maxQuestionCount) {
      const userEmail = localStorage.getItem('user-email');
      const username = userEmail.split("@")[0];

      let stageA1Results = [];
      let stageA2Results = [];

      updatedResults.forEach(result => {
        if (result.exerciseType === "StageA1") {
          stageA1Results = stageA1Results.concat(result);
        } else if (result.exerciseType === "StageA2") {
          stageA2Results = stageA2Results.concat(result);
        }
      })

      saveResult('test-exam-2', username, stageA1Results, stageA2Results);
      setEnd(true);
    }
  }

  //audioSrc: "https://soundbible.com/mp3/heavy-rain-daniel_simon.mp3",
  // time is in seconds, so 00:24 => 24, 01:30 => 90
  const getListeningConfig = () => {
    const l1Config = {
      keyNote: "Rain",
      audioSrc: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
      bellInstances: [
        {
          time: 2,
        },
        {
          time: 5,
        },
        {
          time: 10,
        },
      ],
      onExerciseEnd: (soundCaught) => addResults({soundCaught}),
  };

    const l2Config = {
      keyNote: "Alien",
      audioSrc: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
      bellInstances: [
        {
          time: 5,
        },
        {
          time: 10,
        },
    ],
    onExerciseEnd: (soundCaught) => addResults({soundCaught}),
  };


    return [l1Config, l2Config];
  }


  const IntroductionComp = () => {
    return (
      <div className="exam-intro">
          <p style={{marginBottom: "0"}}>We gaan eerst even oefenen!</p>
          <ExampleQuestion />
          <button className="exam-intro__start-button" onClick={() => setStarted(true)}>Doorgaan →</button>
      </div> 
    );
  }

  const CompleteExamComp = () => {
    return (
      <div>
        <h2>{currentQuestionType}: {currentExercise}</h2>
        { currentQuestionType === Stage.STAGE_A1 ?  <QuestionComp config={questions[currentQ]} /> : <ListeningComp config={listening[currentL]} /> }
      </div>
    );
  }

  const EndComp = () => {
    return (
      <div className="exam-end">
        <div className="exam-end-message">
          Goed gedaan!
          <img id="exam-end-img" src={process.env.PUBLIC_URL + '/media/confetti-gif.webp'} alt="confetti-gif"/>
        </div>
        {/* <Link to="/exam">
          <button id="exam-repeat-btn">Examen Herhalen</button>
        </Link> */}
      </div>
    )
  }

  const questions = getQuestionsConfig();
  const listening = getListeningConfig();
  const maxQuestionCount = questions.length + listening.length;

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

  return (
    <div className="exam">
    <HeaderComp />
    <hr />
    { !started && <IntroductionComp />}
    { (started && !end) && <CompleteExamComp />}
    { end && <EndComp /> }
    </div>
  )
}