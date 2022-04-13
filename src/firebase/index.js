import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const baseConfig = {
  authDomain: "toon-twist-project.firebaseapp.com",
  databaseURL: "https://toon-twist-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "toon-twist-project",
  storageBucket: "toon-twist-project.appspot.com",
  messagingSenderId: "806611453811",
  appId: "1:806611453811:web:6cadb21f90f3f9fda22706",
  measurementId: "G-EJ2VKKJ1T6"
};

const devConfig = {
  // apiKey: "x",
  apiKey: "AIzaSyBizpLHSXHJIYEuKbE4VLJM6eJ_tOOr9zA",
  ...baseConfig,
}

// restricted by HTTP referrerers key for prod
const prodConfig = {
  apiKey: "AIzaSyD4FuzN9ogo4rKHmu3x6Z8ky1nm6SirXB4",
  ...baseConfig,
}

export const appConfig = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

const app = initializeApp(appConfig);

// Get a reference to the database service
export const database = getDatabase(app);

export const saveResult = (examId, name, results, timeTaken) => {
  set(ref(database, `examResults/${examId}-${name}`), {
    results: results,
    submittedAt: new Date().toLocaleString().replace(',',''),
    timeTaken: timeTaken,
    user: {
      name,
    }
  });
}

export const savePreExam = (examId, name, results) => {
  set(ref(database, `examResults/${examId}-${name}`), {
    results: [results],
    submittedAt: new Date().toLocaleString().replace(',',''),
    user: {
      name,
    }
  });
}