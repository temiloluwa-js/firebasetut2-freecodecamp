import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "./firebase-config";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
const Home = () => {
  const collectionRef = collection(database, "users");
  const getData = () => {
    getDocs(collectionRef).then((response) => {
      response.docs.map((item) => {
        console.log(item.data());
      });
    });
  };

  return (
    <div>
      <button onClick={getData}></button>
    </div>
  );
};

export default Home;
