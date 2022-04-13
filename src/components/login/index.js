
import { useEffect } from "react";
import { HeaderComp } from "../header";

// firebase
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { appConfig } from "../../firebase";


export const LoginComp = () => {
  useEffect(() => {
    firebase.initializeApp(appConfig);
      // auth
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          localStorage.setItem("user-token", authResult.user.multiFactor.user.accessToken);
          localStorage.setItem("user-email", authResult.user.multiFactor.user.email);
          return true;
        },
      },
      signInSuccessUrl: `${window.location.origin}/charity-music-game/#/pre-exam`,
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = firebaseui.auth.AuthUI.getInstance() ? firebaseui.auth.AuthUI.getInstance() : new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }, [])

  return (
  <div style={{width: "100%"}}>
    <HeaderComp />
    <hr />
    <div id="firebaseui-auth-container" style={{paddingTop: "50px"}}></div>
  </div>
  );
}
