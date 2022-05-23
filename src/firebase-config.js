// Import the functions you need from the SDKs you need
import {getFirestore, getFIreStore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAiAEZS5lJnreaTcYREDZaF_Nl29R0X-Lk",

  authDomain: "blogproject2-4493d.firebaseapp.com",

  projectId: "blogproject2-4493d",

  storageBucket: "blogproject2-4493d.appspot.com",

  messagingSenderId: "320083680214",

  appId: "1:320083680214:web:9b1ae79fa970a6c740a277"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()