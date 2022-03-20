import { useState } from "react";

// comps
import { HeaderComp } from "../header";

// navigation
import { useNavigate } from "react-router-dom";

const HearingComp = () => {
  const controlAudio = (e) => {
    e.preventDefault();
    document.getElementById(`demo-music-player-2`).play();
  }

  return (
    <div className="landing-page__sound-example">
      <audio
          id="demo-music-player-2"
          controls
          src="https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e)} style={{fontSize: "20px"}}>Luister naar instructies ▶</button>
    </div>
  )
}

const ReadingComp = () => {
  return (
    <>
    <h2 style={{marginBottom: "0"}}>Lees instructies</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </>
  );
}

const Instructions = () => {
  const navigate = useNavigate();
  const [showReading, setShowReading] = useState(false);
  const [showHearing, setShowHearing] = useState(false);

  return (
    <>
      <h2 style={{marginBottom: "0"}}>Instructies,</h2>
      <p >Wil je de instructies zelf lezen of wil je deze horen? Of een combinatie hiervan?</p>
      { (!showReading && !showHearing) && <button id="audio-control" onClick={() => setShowReading(true)} style={{fontSize: "20px"}}>Lezen</button> }
      { (!showReading && !showHearing) && <button id="audio-control" onClick={() => setShowHearing(true)} style={{fontSize: "20px"}}>Horen</button> }
      { (!showReading && !showHearing) && <button id="audio-control" onClick={(e) => {
        setShowReading(true)
        setShowHearing(true)
      }} style={{fontSize: "20px"}}>Lezen + horen</button> }

      { showReading && <ReadingComp /> }
      { showHearing &&  <HearingComp />}

      <button onClick={() => navigate("/exam/example")} className="landing-page-button">Doorgaan →</button>
    </>
  );
}

export const InstructionsComp = () => {
    const [step, setStep] = useState(0);

    const SoundTestComp = () => {
      const controlAudio = (e) => {
        e.preventDefault();
        document.getElementById(`demo-music-player`).play();
      }
    
      return (
      <>
        <h2 style={{marginBottom: "0"}}>Welkom,</h2>
        <p style={{marginBottom: "0"}}>Stel je volume in op een fijn niveau. Wij raden je aan een koptelefoon te gebruiken.</p>
        <p>Voor je begint, klik eerst op de knop hieronder om te controleren of je geluid goed werkt:</p>
        <div className="landing-page__sound-example">
          <audio
              id="demo-music-player"
              controls
              src="https://soundbible.com/mp3/service-bell_daniel_simion.mp3"
              style={{display: "none"}}>
            Your browser does not support the <code>audio</code> element.
          </audio>
          <button id="audio-control" onClick={(e) => controlAudio(e)} style={{fontSize: "20px"}}>Test Geluid ▶</button>
        </div>
        <button onClick={() => setStep(2)}className="landing-page-button">Doorgaan →</button>
      </>);
    }

    return (
      <div className="landing-page">
      <HeaderComp />
      <hr />
      <label className="exam-intro__hint"><i>Klik op de blauwe tegels met ▶ om de clips af te spelen.</i></label>
      {step === 0 ? <SoundTestComp /> : <Instructions /> }
    </div>
    )
}