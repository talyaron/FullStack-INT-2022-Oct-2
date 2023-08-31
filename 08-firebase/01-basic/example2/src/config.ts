// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAgvJ_mR7VIa8gqGOgHKogm32t7fuLBvU",
  authDomain: "shalomtest1.firebaseapp.com",
  projectId: "shalomtest1",
  storageBucket: "shalomtest1.appspot.com",
  messagingSenderId: "115510731085",
  appId: "1:115510731085:web:89af5e5037ea3f69235704",
  measurementId: "G-54C6S43RDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const DB = getFirestore(app);