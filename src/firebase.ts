// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA1fj9OcVFpIgAPJw2KuK_KbavMoTKQPaM",
  authDomain: "figma-community-clone.firebaseapp.com",
  projectId: "figma-community-clone",
  storageBucket: "figma-community-clone.appspot.com",
  messagingSenderId: "338191155024",
  appId: "1:338191155024:web:9ce0265d6a326d318ef655",
  measurementId: "G-5ZQC3229KN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
