import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {app, database} from './firebase-config'
import { collection, addDoc, getDocs  } from 'firebase/firestore'

const Login = () => {

    const collectionRef = collection(database, "users")

    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(collectionRef, {
            email, password
        })
    } 

    const signinWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .catch(err => alert(err))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="password"  onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit">Submit</button>
      </form>

      <button onClick={signinWithGoogle}></button>
    </div>
  )
}

export default Login