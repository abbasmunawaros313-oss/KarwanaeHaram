// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIHGpExJ5f8t9fz5he2_pltFFpSMVIso8",
  authDomain: "karwandemo.firebaseapp.com",
  projectId: "karwandemo",
  storageBucket: "karwandemo.firebasestorage.app",
  messagingSenderId: "716055971957",
  appId: "1:716055971957:web:e587c42f17e3d4e545903c",
  measurementId: "G-7NDWZDFRSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
