import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderComp } from "../header"
import './LandingPage.css';

// firebase
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { appConfig } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
      <button id="audio-control" onClick={(e) => controlAudio(e)} style={{fontSize: "20px"}}>Test Geluid ▶</button>
    </div>
  )
}

export const LandingPageComp = () => {
  const [currentStep, steCurrentStep] = useState("username");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        firebase.initializeApp(appConfig);
        // auth
      var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we Doorgaan the redirect automatically
            // or whether we leave that to developer to handle.
            localStorage.setItem("user-token", authResult.user.multiFactor.user.accessToken);
            localStorage.setItem("user-email", authResult.user.multiFactor.user.email);
            return true;
          },
        },
        signInSuccessUrl: `${window.location.origin}/charity-music-game/#/`,
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
      };
      // Initialize the FirebaseUI Widget using Firebase.
      var ui = firebaseui.auth.AuthUI.getInstance() ? firebaseui.auth.AuthUI.getInstance() : new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container-student', uiConfig);
      } else {
        steCurrentStep("instructions");
      }
    });
  }, [])

  const SoundTestComp = () => {
    return (
    <>
      <h2 style={{marginBottom: "0"}}>Welkom,</h2>
      <p style={{marginBottom: "0"}}>Stel je volume in op een fijn niveau. Wij raden je aan een koptelefoon te gebruiken.</p>
      <p>Voor je begint, klik eerst op de knop hieronder om te controleren of je geluid goed werkt:</p>
      <SoundTest />
      <Link to="/exam">
        <button className="landing-page-button">Doorgaan →</button>
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
        {/* <label className="exam-intro__hint"><i>Click the blue tiles with ▶ to play the clips.</i></label> */}
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

        <button onClick={() => {steCurrentStep("soundtest")}} className="landing-page-button">Doorgaan →</button>
      </>
    );
  }


  return (
    <div className="landing-page">
      <HeaderComp />
      <hr />

      <div className="landing-page__content">
        { currentStep === "username" && <div id="firebaseui-auth-container-student" style={{paddingTop: "50px"}}></div> }
        { currentStep === "instructions" && <InstructionsComp /> }
        { currentStep === "soundtest" && <SoundTestComp /> }
      </div>
    </div>
  )
}