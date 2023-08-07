// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3EMCtONzEZsDuWdkh5zDdK0n4o5qm0IE",
  authDomain: "itaisproject-8ec5f.firebaseapp.com",
  projectId: "itaisproject-8ec5f",
  storageBucket: "itaisproject-8ec5f.appspot.com",
  messagingSenderId: "557628909222",
  appId: "1:557628909222:web:0e84c995b052cb1f20f667",
  measurementId: "G-K3DFNFXMQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);