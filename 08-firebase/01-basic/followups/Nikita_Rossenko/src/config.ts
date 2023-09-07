// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVQE15NUUaVBs5tYn-4Jycrx7PGd1UgTA",
  authDomain: "mytestableproject.firebaseapp.com",
  projectId: "mytestableproject",
  storageBucket: "mytestableproject.appspot.com",
  messagingSenderId: "413514982887",
  appId: "1:413514982887:web:e58ce97b5e84644fcc4942",
  measurementId: "G-TTHJPJYF0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();