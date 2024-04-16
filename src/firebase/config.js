// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR5SFe1BFbC5EYOIQ5TwwEWUZinCWnT7I",
  authDomain: "journal-app-991f9.firebaseapp.com",
  projectId: "journal-app-991f9",
  storageBucket: "journal-app-991f9.appspot.com",
  messagingSenderId: "181533672692",
  appId: "1:181533672692:web:2671c6a696357ac44f0aa1"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );