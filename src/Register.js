import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, database } from "./firebase-config";
import { useNavigate } from "react-router-dom";
const auth = getAuth();

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => console.log(response.user))
      .then(navigate("/"))
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Submit</button>
      </form>


    </div>
  );
};

export default Register;
 