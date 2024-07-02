import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";




/*
const firebaseConfig = {
  apiKey: "AIzaSyAHExHfMDRu2lVecgYxgW86TXDF-dvsWrY",
  authDomain: "personal-finance-tracker-ec56e.firebaseapp.com",
  projectId: "personal-finance-tracker-ec56e",
  storageBucket: "personal-finance-tracker-ec56e.appspot.com",
  messagingSenderId: "669303047696",
  appId: "1:669303047696:web:5b4b41cc896752c03e6c95",
  measurementId: "G-7X36E69HYW",
};

*/

const firebaseConfig = {
  apiKey: "AIzaSyCL5CjNzUrtp0kWB9imH9_DispgRyVu-kI",
  authDomain: "myfinanceapp-94ad8.firebaseapp.com",
  projectId: "myfinanceapp-94ad8",
  storageBucket: "myfinanceapp-94ad8.appspot.com",
  messagingSenderId: "997981445040",
  appId: "1:997981445040:web:3e8ec5675fc6305098d475",
  measurementId: "G-79B7DV3MF2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
