import React, { createRef, useState } from "react";
import { auth, provider } from "./firebase-config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = ({ setisAuth }) => {
  const signInWithPop = () => {
    signInWithPopup(auth, provider)
      .then(setisAuth(true))
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailAndPasswordSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(navigate("/"));
  };

  return (
    <div>
      <form onSubmit={emailAndPasswordSignIn}>
        <label htmlFor="">Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="">Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Submit</button>
      </form>

      <button onClick={signInWithPop}>Sign In With Google 😀</button>
    </div>
  );
};

export default Login;
