import { useEffect, useRef, useState } from "react";
import { ExerciseComp } from "../exercise"
import { QuestionComp } from "../question";

// import './Exam.css';

export const ExamComp = () => {
  const [results, setResult] = useState([])
  const [started, setStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0);

  const ExplanationElement = () => {
    return (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>);
  }

  const getQuestionsConfig = () => {
    const q1Config = {
      mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
      mp3Url2: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
      correctAnswer: "same",
      onDone: (reactionTime, answerCorrect) => console.log(`question 1 done with time: ${reactionTime}, correct? ${answerCorrect}`)
    };

    const q2Config = {
      mp3Url1: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3",
      mp3Url2: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
      correctAnswer: "different",
      onDone: (reactionTime, answerCorrect) => console.log(`question 2 done with time: ${reactionTime}, correct? ${answerCorrect}`)
    };

    const q3Config = {
      mp3Url1: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
      mp3Url2: "https://soundbible.com/mp3/Dying%20Robot-SoundBible.com-1721415199.mp3",
      correctAnswer: "same",
      onDone: (reactionTime, answerCorrect) => console.log(`question 3 done with time: ${reactionTime}, correct? ${answerCorrect}`)
    };

    return [q1Config, q2Config, q3Config];
  }


  const configs = getQuestionsConfig();

  const nextQuestion = (e) => {
    e.preventDefault();
    const nextQuestionIndex = currentQ + 1;
    if (nextQuestionIndex < configs.length) {
      setCurrentQ(nextQuestionIndex)
    } else {
      console.log("END!");
    }
  }

  return (
    <>
    <h1>Exam</h1>
    { !started ? (
      <>
        <ExplanationElement />
        <button onClick={() => setStarted(true)}>Start</button>
      </> ) : null
    }

    { started ? (
      <>
        <h3>Question {currentQ+1}</h3>
        <QuestionComp config={configs[currentQ]} />
      </>
      ) : null 
    }
    <a href="#" onClick={nextQuestion}>Next</a>
    </>
  )
}