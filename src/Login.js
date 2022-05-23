import React, { useState } from "react";
import { auth, provider } from "./firebase-config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = ({ setisAuth }) => {
  const signInWithPopUp = () => {
    signInWithPopup(auth, provider)
      .then(setisAuth(true))
      .catch((err) => console.log(err));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(setisAuth(true))
    .catch((err) => console.log(err))
  };
  return (
    <div>
      <button onClick={signInWithPopUp}>Login with Google</button>
      <form onSubmit={signInWithEmailAndPassword}>
        <label htmlFor="email">Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Sign In With Email And Password</button>
      </form>
    </div>
  );
};

export default Login;
