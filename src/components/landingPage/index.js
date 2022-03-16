import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderComp } from "../header"
import './LandingPage.css';

const SoundTest = () => {
  const controlAudio = (e) => {
    e.preventDefault();
    document.getElementById(`demo-music-player`).play();
  }

  return (
    <div className="landing-page__sound-example">
      <audio
          id="demo-music-player"
          controls
          src="https://soundbible.com/mp3/service-bell_daniel_simion.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e)} style={{fontSize: "20px"}}>Test sound ▶</button>
    </div>
  )
}

export const LandingPageComp = () => {
  const [currentStep, steCurrentStep] = useState("username");

  const saveName = () => {
    const inputField = document.getElementById('name-input__field');

    if (inputField) {
      const userName = inputField.value;

      if (userName) {
        localStorage.setItem('toon-twist-username', userName);
        steCurrentStep("instructions");
      }
    }
  }

  const StudentNameComp = () => {
    const [startEnabled, setStartEnabled] = useState(false);

    const checkValidity = (e) => {
      e.target.value ? setStartEnabled(true) : setStartEnabled(false);
    }

    return (
    <div className="name-input">
      <h1>Vul hier je naam in 👇</h1>
      <input id="name-input__field" type="text" onChange={(e) => checkValidity(e)} placeholder="Enter your full name" name="fullName" />
      <button onClick={saveName} className={`landing-page-button ${startEnabled ? "" : "landing-page-button-disabled"}`}>Start →</button>
    </div>
    );
  }

  const SoundTestComp = () => {
    return (
    <>
      <h2 style={{marginBottom: "0"}}>Welkom,</h2>
      <p style={{marginBottom: "0"}}>Stel je volume in op een fijn niveau. Wij raden je aan een koptelefoon te gebruiken.</p>
      <p>Voor je begint, klik eerst op de knop hieronder om te controleren of je geluid goed werkt:</p>
      <SoundTest />
      <Link to="/exam">
        <button className="landing-page-button">Continue →</button>
      </Link>
    </>);
  }

  const InstructionsComp = () => {
    const [showReading, setShowReading] = useState(false);
    const [showHearing, setShowHearing] = useState(false);


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

    return (
      <>
        <h2 style={{marginBottom: "0"}}>Instructies,</h2>
        <p >Wil je de instructies zelf lezen of wil je deze horen? Of een combinatie hiervan?</p>
        <button id="audio-control" onClick={() => setShowReading(true)} style={{fontSize: "20px"}}>Lezen</button>
        <button id="audio-control" onClick={() => setShowHearing(true)} style={{fontSize: "20px"}}>Horen</button>
        <button id="audio-control" onClick={(e) => {
          setShowReading(true)
          setShowHearing(true)
        }} style={{fontSize: "20px"}}>Lezen + horen</button>

        { showReading && <ReadingComp /> }
        { showHearing &&  <HearingComp />}

        <button onClick={() => {steCurrentStep("soundtest")}} className="landing-page-button">Continue →</button>
      </>
    );
  }


  return (
    <div className="landing-page">
      <HeaderComp />
      <hr />

      <div className="landing-page__content">
        { currentStep === "username" && <StudentNameComp /> }
        { currentStep === "instructions" && <InstructionsComp /> }
        { currentStep === "soundtest" && <SoundTestComp /> }
      </div>
    </div>
  )
}