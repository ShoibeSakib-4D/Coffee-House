// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWgS5Uhxu71YsfZnIN-LmE1t8N0LEKSpk",
  authDomain: "coffee-house-application.firebaseapp.com",
  projectId: "coffee-house-application",
  storageBucket: "coffee-house-application.firebasestorage.app",
  messagingSenderId: "876819635180",
  appId: "1:876819635180:web:115aa36897983d94887ec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
