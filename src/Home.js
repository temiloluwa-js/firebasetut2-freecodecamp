import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import { database } from "./firebase-config";
const Home = () => {
  const collectionRef = collection(database, "users");

  //get data from database
  const getData = () => {
    getDocs(collectionRef).then((response) => {
      response.docs.map((item) => {
        console.log(item.data());
      });
    });
  };

  const updateData = () => {
    const doctoUpdate = doc(database, "users", "PnYjY7KA8myu1zjJAGgi");
    updateDoc(doctoUpdate, {
      email: "ade@b.com",
      password: "akin@a.com"
    })
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default Home;
