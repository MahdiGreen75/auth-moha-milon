// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAySJZ1xP5ULbdPrFCTwJmqLDfL6_R4p7k",
  authDomain: "auth-moha-milon-9c0af.firebaseapp.com",
  projectId: "auth-moha-milon-9c0af",
  storageBucket: "auth-moha-milon-9c0af.appspot.com",
  messagingSenderId: "961370309119",
  appId: "1:961370309119:web:d4b01fb97d2c56727f27ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;