/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHdmAJbVX-2JFtuuXMo6xC7cyQrVzBg8g",
  authDomain: "assignment-task10.firebaseapp.com",
  projectId: "assignment-task10",
  storageBucket: "assignment-task10.appspot.com",
  messagingSenderId: "977085989853",
  appId: "1:977085989853:web:1217f209598f629863ec34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
