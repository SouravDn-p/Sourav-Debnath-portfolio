// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmx6aqBwRThNs22p8dlRPbCaOeQ2EViOU",
  authDomain: "sourav-debnath-246.firebaseapp.com",
  projectId: "sourav-debnath-246",
  storageBucket: "sourav-debnath-246.firebasestorage.app",
  messagingSenderId: "1057172221367",
  appId: "1:1057172221367:web:f4c33b2d397d9f9197cc32",
  measurementId: "G-32BZPLYM0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
