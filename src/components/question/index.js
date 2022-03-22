/* eslint-disable jsx-a11y/anchor-is-valid */
import './Question.css';

export const QuestionComp = ({config, hasButtons = true, hasTitle = true}) => {
  const { mp3Url1, mp3Url2, correctAnswer, id = "", onDone} = config;
  let startTime = 0;
  let reactionTime = 0;
  let givenAnswer = "";

  const startTimer = () => {
    if (startTime === 0) startTime = new Date().getTime();
  };
  const endTimer = () => {
    reactionTime = (new Date().getTime() - startTime) / 1000;
    onDone(reactionTime, correctAnswer === givenAnswer, config);
  };

  const controlAudio = (e, num) => {
    e.preventDefault();
    document.getElementById(`music-player-${id}-${num}`).play();
  }

  const registerAnswer = (answer) => {
    givenAnswer = answer;
    endTimer();
  }

  return (
    <>
      {/* Question */}
      { hasTitle ? (
        <p>Luister goed naar de audio fragmenten, zijn ze <b><u><i>hetzelfde</i></u></b> of <b><u><i>anders</i></u></b>?</p>
      ) : null }

      {/* Sound samples */}
      <audio
          id={`music-player-${id}-1`}
          controls
          src={mp3Url1}
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e, 1)}>Audio Afspelen 1 ▶</button>

      <audio
          id={`music-player-${id}-2`}
          controls
          onEnded={startTimer}
          src={mp3Url2}
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e, 2)}>Audio Afspelen 2 ▶</button>

      {/* Answer options */}
      { hasButtons ? (
        <div>
        <button className="button-exam-control" onClick={() => registerAnswer("same")}>Hetzelfde</button>
        <button className="button-exam-control" onClick={() => registerAnswer("different")}>Anders</button>
      </div>
      ) : null }
    </>
  )
}