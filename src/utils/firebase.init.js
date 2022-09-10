// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp5k4Mxzcgcb2tLDghN5HUWq_BTZQWmyE",
  authDomain: "airbnb-app-6af8c.firebaseapp.com",
  projectId: "airbnb-app-6af8c",
  storageBucket: "airbnb-app-6af8c.appspot.com",
  messagingSenderId: "393408220909",
  appId: "1:393408220909:web:578afde34f55d68ee486e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
