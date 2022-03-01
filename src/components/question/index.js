/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from "react";
// import './Question.css';

export const QuestionComp = ({ mp3Url1, mp3Url2, correctAnswer, onDone }) => {
  let startTime = 0;
  let reactionTime = 0;
  let givenAnswer = "";

  const startTimer = () => {
    if (startTime === 0) startTime = new Date().getTime();
  };
  const endTimer = () => {
    reactionTime = (new Date().getTime() - startTime) / 1000;
    console.log("concluded with:", givenAnswer, reactionTime);
  };

  const controlAudio = (e, num) => {
    e.preventDefault();
    document.getElementById(`music-player-${num}`).play();
  }

  const registerAnswer = (answer) => {
    givenAnswer = answer;
    endTimer();
  }

  return (
    <>
      {/* Question */}
      <h1>Question 1</h1>
      <p>Are these two notes the <b>same</b> or <b>different</b>?</p>

      {/* Sound samples */}
      <audio
          id="music-player-1"
          controls
          src="https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <a href="#" id="audio-control" onClick={(e) => controlAudio(e, 1)}>Play Audio 1</a>

      <audio
          id="music-player-2"
          controls
          onEnded={startTimer}
          src="https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <a href="#" id="audio-control" onClick={(e) => controlAudio(e, 2)}>Play Audio 2</a>

      {/* Answer options */}
      <div>
        <button onClick={() => registerAnswer("same")}>Same</button>
        <button onClick={() => registerAnswer("different")}>Different</button>
      </div>

      {/* Next question */}
      <a href="#" onClick={(_) => console.log("next page")}>Next</a>
    </>
  )
}