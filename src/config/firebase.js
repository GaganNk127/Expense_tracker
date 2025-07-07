// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApevGJcfwQv1dTeqRMS4JEd_YCppZZlhw",
  authDomain: "expense-tracker-ca2d6.firebaseapp.com",
  projectId: "expense-tracker-ca2d6",
  storageBucket: "expense-tracker-ca2d6.firebasestorage.app",
  messagingSenderId: "199103915449",
  appId: "1:199103915449:web:cd4532c234429faeb88268",
  measurementId: "G-SCVN816P7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);