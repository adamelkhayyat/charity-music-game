
// comps
import { QuestionComp } from "../question";
import { HeaderComp } from "../header";

// navigation
import { useNavigate } from "react-router-dom";

import { v4 as uuid } from 'uuid';

const ExampleQuestions = () => {
  const exampleQ1Config = {
    id: uuid(),
    mp3Url1: "https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3",
    mp3Url2: "https://soundbible.com/mp3/Short%20Beep%20Tone-SoundBible.com-1937840853.mp3",
    correctAnswer: "different",
    onDone: null
  };

  const exampleQ2Config = {
    id: uuid(),
    mp3Url1: "https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3",
    mp3Url2: "https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3",
    correctAnswer: "same",
    onDone: null
  };

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <QuestionComp config={exampleQ1Config} hasButtons={false} hasTitle={false}/>
        <label>Deze twee audioclips zijn <i><u>verschillend</u></i>.</label>
      </div>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <QuestionComp config={exampleQ2Config} hasButtons={false} hasTitle={false} />
        <label>Deze twee audioclips zijn <i><u>hetzelfde</u></i>.</label>
      </div>
    </div>
  )
}

export const IntroductionComp = () => {
  const navigate = useNavigate();

  const examId = localStorage.getItem("examId");
  if (!examId) navigate('/exam/select');

  return (
    <div className="landing-page">
      <HeaderComp />
      <hr />
      <div className="exam-intro">
        <label className="exam-intro__hint"><i>Klik op de blauwe tegels met ▶ om de clips af te spelen.</i></label>
        <p style={{marginBottom: "0"}}>We gaan eerst even oefenen!</p>
        <p style={{color: "red"}}><b>De onderstaande audioclips zijn voorbeelden!</b></p>
        <ExampleQuestions />
        <button className="exam-intro__start-button" onClick={() => navigate('/exam')}>Doorgaan →</button>
      </div>
    </div>
  );
}