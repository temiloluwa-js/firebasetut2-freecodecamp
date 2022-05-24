import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const auth = getAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(response => console.log(response.user))
        .catch(err => console.log(err))
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
    </div>
  )
}

export default Login