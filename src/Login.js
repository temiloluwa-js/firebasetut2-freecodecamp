import React, { createRef, useState } from "react";
import { auth, provider } from "./firebase-config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = ({ setisAuth }) => {
  const signInWithPop = () => {
      signInWithPopup(auth, provider)
      .then(setisAuth(true))
      .catch(err => console.log(err))
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return <div>
      
  </div>;
};

export default Login;
