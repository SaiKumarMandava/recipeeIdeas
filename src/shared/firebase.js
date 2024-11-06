// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFKfrFU5zhmTmHKseEGZoh-NVAf4lbpHs",
  authDomain: "recipe-3303f.firebaseapp.com",
  projectId: "recipe-3303f",
  storageBucket: "recipe-3303f.firebasestorage.app",
  messagingSenderId: "301194833815",
  appId: "1:301194833815:web:bdb232d973e21b2ab29ed2",
  measurementId: "G-RWX994Y9QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);