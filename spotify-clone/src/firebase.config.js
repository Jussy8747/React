// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCaM5YGO1EzbgIuAqgnFCS-QuWvuE6Nvec",
  authDomain: "sportify-clone-ec471.firebaseapp.com",
  projectId: "sportify-clone-ec471",
  storageBucket: "sportify-clone-ec471.appspot.com",
  messagingSenderId: "96577246923",
  appId: "1:96577246923:web:33263945130a5be8ed6d4e",
  measurementId: "G-YY5MLS36B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()