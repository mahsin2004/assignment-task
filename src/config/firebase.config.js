/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCmC_STWRrC9WhU2N4kiAQl98Kc3vryyEM",
  authDomain: "paid-courses-1.firebaseapp.com",
  projectId: "paid-courses-1",
  storageBucket: "paid-courses-1.appspot.com",
  messagingSenderId: "553952769840",
  appId: "1:553952769840:web:4eebb4470566ac32e83af5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
