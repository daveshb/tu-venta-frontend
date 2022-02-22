import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
   signOut, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc  } from 'firebase/firestore'; 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBioVaLD5pRN-JUl7x4f3l7Vx5xbCjnUyI",
  authDomain: "tuventa-b99b8.firebaseapp.com",
  projectId: "tuventa-b99b8",
  storageBucket: "tuventa-b99b8.appspot.com",
  messagingSenderId: "417769817121",
  appId: "1:417769817121:web:5f6b53a8efc52c7345cf60"
};

const app = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const auth = getAuth(app);
const db = getFirestore();
export {
  googleAuthProvider, 
  signInWithPopup, 
  app,
  auth,
  onAuthStateChanged,
  signOut,
  facebookAuthProvider,
  db,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
}
