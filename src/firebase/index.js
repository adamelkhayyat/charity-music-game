import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

export const appConfig = {
  apiKey: "x",
  authDomain: "toon-twist-project.firebaseapp.com",
  databaseURL: "https://toon-twist-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "toon-twist-project",
  storageBucket: "toon-twist-project.appspot.com",
  messagingSenderId: "806611453811",
  appId: "1:806611453811:web:6cadb21f90f3f9fda22706",
  measurementId: "G-EJ2VKKJ1T6"
};

const app = initializeApp(appConfig);

// Get a reference to the database service
export const database = getDatabase(app);

export const saveResult = (examId, name, stageA1Results, stageA2Results) => {
  set(ref(database, `examResults/${examId}-${name}`), {
    stageA1: stageA1Results,
    stageA2: stageA2Results,
    submittedAt: new Date().toLocaleString().replace(',',''),
    timeTaken: 0,
    user: {
      name,
    }
  });
}