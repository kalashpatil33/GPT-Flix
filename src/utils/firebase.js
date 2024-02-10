// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYlzokO1UjeYfxqHIyrm5gJ6fPNvCHv4Q",
    authDomain: "netflix-gpt-d534b.firebaseapp.com",
    projectId: "netflix-gpt-d534b",
    storageBucket: "netflix-gpt-d534b.appspot.com",
    messagingSenderId: "438301869803",
    appId: "1:438301869803:web:672c126a69b10323b0a0ae",
    measurementId: "G-ZVM816ZBSK"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth(); 