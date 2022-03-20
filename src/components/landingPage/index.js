import { useEffect } from "react";

// comps
import { HeaderComp } from "../header"

// navigation
import { useNavigate } from "react-router-dom";

// firebase
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { appConfig } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './LandingPage.css';

export const LandingPageComp = () => {
  const navigation = useNavigate();

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
        signInSuccessUrl: `${window.location.origin}/charity-music-game/#/exam/instructions`,
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
        navigation("/exam/instructions");
      }
    });
  }, [])

  return (
    <div className="landing-page">
      <HeaderComp />
      <hr />

      <div className="landing-page__content">
        <div id="firebaseui-auth-container-student" style={{paddingTop: "50px"}}></div>
      </div>
    </div>
  )
}