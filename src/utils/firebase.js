// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBStAk_MvHVw-ea4hoQqbpwUT_YgozO4xk",
  authDomain: "netfliksgpt.firebaseapp.com",
  projectId: "netfliksgpt",
  storageBucket: "netfliksgpt.appspot.com",
  messagingSenderId: "337866383473",
  appId: "1:337866383473:web:aeace55466feb3799dbbd0",
  measurementId: "G-DZTVW6SBZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
