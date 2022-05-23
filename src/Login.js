import React from "react";
import { auth, provider } from "./firebase-config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = ({ isAuth }) => {
  const signInWithPopUp = () => {
    signInWithPopup(auth).then(() => {
      localStorage.setItem("isAuth", true).catch((err) => console.log(err));
    });
  };
  return <div>Login</div>;
};

export default Login;
