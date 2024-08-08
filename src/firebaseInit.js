// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "blogging-app-5094b.firebaseapp.com",
  projectId: "blogging-app-5094b",
  storageBucket: "blogging-app-5094b.appspot.com",
  messagingSenderId: "248493629379",
  appId: "1:248493629379:web:fc827a7968e7fb08cc2776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);