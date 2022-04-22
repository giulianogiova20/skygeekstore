// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6PmJz7XoFxWVAZfJeHF7amRJEwJoq7Us",
  authDomain: "skygeekstore.firebaseapp.com",
  projectId: "skygeekstore",
  storageBucket: "skygeekstore.appspot.com",
  messagingSenderId: "473275393894",
  appId: "1:473275393894:web:8cfd02db91c6bcb3dccaa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)