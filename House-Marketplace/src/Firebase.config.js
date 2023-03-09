
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB1Yi-wNVflDKTikXGfBaaMO-1UOQ5YgZM",
  authDomain: "house-marketplace-c0b91.firebaseapp.com",
  projectId: "house-marketplace-c0b91",
  storageBucket: "house-marketplace-c0b91.appspot.com",
  messagingSenderId: "18029127384",
  appId: "1:18029127384:web:2faed0fdaa40823255d9ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()