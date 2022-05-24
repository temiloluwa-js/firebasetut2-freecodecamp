import React, { useState } from "react";
import { auth } from "firebase-admin";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const createnewUser = (e) => {
    e.preventDefault();
    auth.createUser({
        name,
        email,
        password,
        phoneNo,
      })
      .then((user) => console.log(user))
      .then(navigate('/login'))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onClick={createnewUser}>
        <label htmlFor="">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="">Phone Number</label>
        <input type="tel" onChange={(e) => setPhoneNo(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Home;
