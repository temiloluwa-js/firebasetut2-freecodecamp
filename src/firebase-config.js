import {getFIreStore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";


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
export const admin = initializeApp(app)
export const db = getFIreStore(app)
export const provider = new GoogleAuthProvider()