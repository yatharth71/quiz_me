import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1QSix86u11VUeI8jCaIPuhGVqNsN2TcY",
  authDomain: "hackathon-project-40683.firebaseapp.com",
  projectId: "hackathon-project-40683",
  storageBucket: "hackathon-project-40683.appspot.com",
  messagingSenderId: "209240270814",
  appId: "1:209240270814:web:7fea3bc02746f81c9c5f4f",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);