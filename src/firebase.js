// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaq6q1j0_PkaJF3_ssnbwQbncaTfufl6o",
  authDomain: "harmaintravelspehswar.firebaseapp.com",
  projectId: "harmaintravelspehswar",
  storageBucket: "harmaintravelspehswar.firebasestorage.app",
  messagingSenderId: "993786104572",
  appId: "1:993786104572:web:7aba67ab5e341c6e186579",
  measurementId: "G-BNKLLGKT23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
