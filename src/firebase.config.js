// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhNqMz8G8nZfZbh4M51nTDqEga0JfXb1s",
  authDomain: "house-marketplace-app-91fa4.firebaseapp.com",
  projectId: "house-marketplace-app-91fa4",
  storageBucket: "house-marketplace-app-91fa4.appspot.com",
  messagingSenderId: "970666671327",
  appId: "1:970666671327:web:3c5f2363123a6e53467d6a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
