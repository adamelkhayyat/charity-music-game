import { Link } from "react-router-dom";
import { HeaderComp } from "../header"
import './LandingPage.css';

const ExplanationElement = () => {
  return (<>
    <h2 style={{marginBottom: "0"}}>Welcome!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </>);
}

const SoundTest = () => {
  const controlAudio = (e) => {
    e.preventDefault();
    document.getElementById(`demo-music-player`).play();
  }

  return (
    <div className="landing-page__sound-example">
      <label className="landing-page__hint"><span style={{fontSize: "30px"}}>🔊</span> <b><i>Please set your volume to a comfortable level.</i></b></label>
      <audio
          id="demo-music-player"
          controls
          src="https://soundbible.com/mp3/service-bell_daniel_simion.mp3"
          style={{display: "none"}}>
        Your browser does not support the <code>audio</code> element.
      </audio>
      <button id="audio-control" onClick={(e) => controlAudio(e)}>Test sound ▶</button>
    </div>
  )
}

export const LandingPageComp = () => {
  return (
    <div className="landing-page">
    <HeaderComp />
    <hr />

    <div className="landing-page__content">
      <ExplanationElement />
      <SoundTest />
    </div>
    
    <Link to="/exam">
      <button className="landing-page__start-button">Start →</button>
    </Link>
    </div>
  )
}