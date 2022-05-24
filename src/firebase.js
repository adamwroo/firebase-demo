// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3cvp0xO8Fe6h5Mo6vTwVTWD2Gl-uYuoQ",
  authDomain: "fir-demo-rti.firebaseapp.com",
  databaseURL: "https://fir-demo-rti-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-demo-rti",
  storageBucket: "fir-demo-rti.appspot.com",
  messagingSenderId: "668457948993",
  appId: "1:668457948993:web:a9dad6cc180fc850c773c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);