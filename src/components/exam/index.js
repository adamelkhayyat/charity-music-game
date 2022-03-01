import { useEffect, useRef, useState } from "react";
import { ExerciseComp } from "../exercise"
import { QuestionComp } from "../question";

// import './Exam.css';

export const ExamComp = () => {
  const [results, setResult] = useState([])
  const [started, setStarted] = useState(false)

  const ExplanationElement = () => {
    return (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>);
  }

  
  const QuestionsElement = () => {
    const question1 = <QuestionComp  mp3Url1={"https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3"} mp3Url2={"https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3"} correctAnswer={"same"} onDone={() => console.log("question done.")} />
  }

  return (
    <>
    <h1>Exam</h1>
    { !started ? (
      <>
        <ExplanationElement />
        <button onClick={() => setStarted(true)}>Start</button>
      </> ) : (
        <QuestionsElement />
      ) 
    }
    </>
  )
}