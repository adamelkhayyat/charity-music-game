import { useState } from "react";
import { QuestionComp } from "../question";
import { HeaderComp } from "../header";
import { useNavigate } from "react-router-dom";

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

export const IntroductionComp = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <HeaderComp />
      <hr />
      <div className="exam-intro">
        <label className="exam-intro__hint"><i>Klik op de blauwe tegels met ▶ om de clips af te spelen.</i></label>
        <p style={{marginBottom: "0"}}>We gaan eerst even oefenen!</p>
        <ExampleQuestion />
        <button className="exam-intro__start-button" onClick={() => navigate('/exam')}>Doorgaan →</button>
      </div>
    </div>
  );
}