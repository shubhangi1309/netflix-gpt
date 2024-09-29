// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYo7p0UoGLVVP2TIDBUk9CiILaPf15vuM",
  authDomain: "netflixgpt-eda48.firebaseapp.com",
  projectId: "netflixgpt-eda48",
  storageBucket: "netflixgpt-eda48.appspot.com",
  messagingSenderId: "174819020184",
  appId: "1:174819020184:web:f21f864691d3ac95526fed",
  measurementId: "G-1SR3H445QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// we're doing getAuth in central place so that we can call it ONCE
export const auth = getAuth();