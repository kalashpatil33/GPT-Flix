// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "gptflix-74f90.firebaseapp.com",
  projectId: "gptflix-74f90",
  storageBucket: "gptflix-74f90.appspot.com",
  messagingSenderId: "996397049425",
  appId: "1:996397049425:web:a7561fbbfe66a5e614fa70",
  measurementId: "G-PHM8F81XCB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth(); 