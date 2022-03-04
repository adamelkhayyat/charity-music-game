import { useEffect, useRef, useState } from "react";
import { ExerciseComp } from "../exercise"
import { QuestionComp } from "../question";

// import './Exam.css';

export const ExamComp = ({ onDone }) => {
  const [results, setResult] = useState([])
  const [started, setStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0);
  const [currentL, setCurrentL] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(1);
  const [currentQuestionType, setCurrentQuestionType] = useState("question");

  const ExplanationElement = () => {
    return (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>);
  }

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
    console.log(currentExercise);
    const adjustedResult = {
      ...result,
      exerciseNum: currentExercise,
      exerciseType: currentQuestionType
    }

    const updatedResults = [...results, adjustedResult]
    console.log("addResults")
    console.log(updatedResults);
    setResult(updatedResults);
    nextExercise(currentQuestionType);

    if (currentExercise >= maxQuestionCount) {
      onDone(updatedResults);
    }
  }

  // time is in seconds, so 00:24 => 24, 01:30 => 90
  const getListeningConfig = () => {
    const l1Config = {
      keyNote: "Bell",
      audioSrc: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
      bellInstances: [
      {
        time: 1,
      },
    ],
    onExerciseEnd: (soundCaught) => addResults({soundCaught}),
  };

    const l2Config = {
      keyNote: "Alien",
      audioSrc: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
      bellInstances: [
      {
        time: 1,
      },
    ],
    onExerciseEnd: (soundCaught) => addResults({soundCaught}),
  };


    return [l1Config, l2Config];
  }

  const questions = getQuestionsConfig();
  const listening = getListeningConfig();
  const maxQuestionCount = questions.length + listening.length;

  const nextExercise = (type) => {
    if (type === "question") {
      const nextQuestionIndex = currentQ + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQ(nextQuestionIndex);
      } else {
        setCurrentQuestionType("listening");
      }
    } else {
      const nextListeningIndex = currentL + 1;
      if (nextListeningIndex < listening.length) {
        setCurrentL(nextListeningIndex);
      }
    }

    if (currentExercise <= maxQuestionCount) {
      setCurrentExercise(currentExercise + 1);
    } else {
      console.log("final result");
      console.log(results);
    }
  }

  return (
    <>
    <h1>Exam</h1>
    { !started ? (
      <>
        <ExplanationElement />
        <button onClick={() => setStarted(true)}>Start</button>
      </> ) : (
      <>
        <h3>Exercise {currentExercise}</h3>
        { currentQuestionType === "question" ?  <QuestionComp config={questions[currentQ]} /> : <ExerciseComp config={listening[currentL]} /> }
      </>
      )
    }
    </>
  )
}