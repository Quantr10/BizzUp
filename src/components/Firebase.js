// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqldtVKOm0BvHamHdAO4dDG2hIKQqxSfE",
  authDomain: "bizzup-73403.firebaseapp.com",
  projectId: "bizzup-73403",
  storageBucket: "bizzup-73403.firebasestorage.app",
  messagingSenderId: "262903284910",
  appId: "1:262903284910:web:7439ab74676915fd68993f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;