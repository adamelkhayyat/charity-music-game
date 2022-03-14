import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const app = initializeApp({
  apiKey: "AIzaSyCxByr2kg0yiKZdUy0A_7RvYjVMovqeKtg",
  authDomain: "toon-twist-project.firebaseapp.com",
  databaseURL: "https://toon-twist-project-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "toon-twist-projectD",
  storageBucket: "toon-twist-project.appspot.com",
  messagingSenderId: "806611453811",
});

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