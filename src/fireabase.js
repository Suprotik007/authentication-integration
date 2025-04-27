// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy5nUYe0Gww3RuZI5iG1ijYd2FTGCFCcI",
  authDomain: "authentication-integrati-54aa8.firebaseapp.com",
  projectId: "authentication-integrati-54aa8",
  storageBucket: "authentication-integrati-54aa8.firebasestorage.app",
  messagingSenderId: "766196951588",
  appId: "1:766196951588:web:fd3499ef81dd922149c6b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);