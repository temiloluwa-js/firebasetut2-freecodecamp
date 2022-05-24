import React, { useState } from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

import { useNavigate } from "react-router-dom";
const Login = () => {
  // const 
  return <div>
    <form >
      <label htmlFor="email">Email</label>
      <input type="email" />

      <label htmlFor="password">Password</label>
      <input type="password" />

      <button type="submit">Submit</button>
    </form>
  </div>;
};

export default Login;
