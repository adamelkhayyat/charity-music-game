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
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FMiss%20Duck%20-%20Pre%20test%20.mp3?alt=media&token=1c62a56d-d119-473b-89f0-620f39ff53a9",
      // audioSrc: "https://soundbible.com/mp3/alien-spaceship_daniel_simion.mp3",
      message: "In dit muziekstuk zitten een aantal van deze belletjes verstopt! Kan jij ze allemaal vinden? Als je er 1 hebt gehoord, druk dan zo snel mogelijk op de spatiebalk!",
      topTip: "Tip:  het voorbeeld kun je zo vaak beluisteren als je zelf wil, probeer de bel in het voorbeeld te onthouden. Er zullen namelijk ook andere bellen inzitten, maar dit is niet de bel. Die. We zoeken. De uitdaging kun je maar 1 keer beluisteren!",
      bellInstances: [
        {
          time: 14,
        },
        {
          time: 43,
        },
        {
          time: 63,
        },
        {
          time: 99,
        },
        {
          time: 139,
        },
        {
          time: 151,
        },
      ],
      onDone: (soundCaught, config) => finishInitialExam({soundCaught, config}, "preExam"),
    };

    const postExam = {
      stage: "Post-test",
      type: "listening",
      title: "Post-test",
      audioSrc: "https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FMiss%20Duck%20-%20Post%20test.mp3?alt=media&token=cf1dacd7-e9fa-41e2-ab41-fd0c84607f99",
      // audioSrc: "https://soundbible.com/mp3/alien-spaceship_daniel_simion.mp3",
      message: "In dit muziekstuk zitten een aantal van deze belletjes verstopt! Kan jij ze allemaal vinden? Als je er 1 hebt gehoord, druk dan zo snel mogelijk op de spatiebalk!",
      topTip: "Tip:  het voorbeeld kun je zo vaak beluisteren als je zelf wil, probeer de bel in het voorbeeld te onthouden. Er zullen namelijk ook andere bellen inzitten, maar dit is niet de bel. Die. We zoeken. De uitdaging kun je maar 1 keer beluisteren!",
      bellInstances: [
        {
          time: 24,
        },
        {
          time: 42,
        },
        {
          time: 69,
        },
        {
          time: 119,
        },
        {
          time: 128,
        },
        {
          time: 158,
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

  const BellExampleComp = () => {
    const controlAudio = (e) => {
      e.preventDefault();
      document.getElementById(`music-player-example-bell`).play();
    }

    return (
      <div style={{display: "flex", flexDirection: "row"}}>
        <audio
        id={`music-player-example-bell`}
        controls
        src="https://firebasestorage.googleapis.com/v0/b/toon-twist-project.appspot.com/o/audio%2FMiss%20Duck%20-%20sound%20example.mp3?alt=media&token=47a395b7-8890-42ef-b667-41261ac5adc2"
        style={{display: "none"}}>
          Your browser does not support the <code>audio</code> element.
        </audio>
        <p>Luister naar de bel in het voorbeeld hieronder:</p>
        <button id="audio-control" style={{marginLeft: "5px", height: "30px", fontSize: "15px", padding: "0", width: "50px"}} onClick={(e) => controlAudio(e)}>▶</button>
      </div>
    );
  }


  return (
    <div className="exam">
      <HeaderComp />
      <hr />
      { !showPreExam && <PreExamChoice /> }
      { (showPreExam && question) && <BellExampleComp /> }
      { (showPreExam && question) && <PreExamQuestion question={question} /> }
    </div>
  )
}