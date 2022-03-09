/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from "react";
import './Question.css';

export const QuestionComp = ({config}) => {
  const { mp3Url1, mp3Url2, correctAnswer, onDone } = config;
  let startTime = 0;
  let reactionTime = 0;
  let givenAnswer = "";

  const startTimer = () => {
    if (startTime === 0) startTime = new Date().getTime();
  };
  const endTimer = () => {
    reactionTime = (new Date().getTime() - startTime) / 1000;
    console.log("concluded with:", givenAnswer, reactionTime);
    onDone(reactionTime, correctAnswer === givenAnswer);
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
      <p>Are these two notes the <b>same</b> or <b>different</b>?</p>

      {/* Sound samples */}
      <audio
          id="music-player-1"
          controls
          src={mp3Url1}
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e, 1)}>Play Audio 1 ▶</button>

      <audio
          id="music-player-2"
          controls
          onEnded={startTimer}
          src={mp3Url2}
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e, 2)}>Play Audio 2 ▶</button>

      {/* Answer options */}
      <div>
        <button className="button-exam-control" disabled={givenAnswer ? true : false} onClick={() => registerAnswer("same")}>Same</button>
        <button className="button-exam-control" disabled={givenAnswer ? true : false} onClick={() => registerAnswer("different")}>Different</button>
      </div>
    </>
  )
}