import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getDocs,
  collection,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
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

  useEffect(() => {
    getData()
  }, [])
  const doctoUpdate = doc(database, "users", "PnYjY7KA8myu1zjJAGgi");
  //update data in database
  const updateData = () => {
    updateDoc(doctoUpdate, {
      email: "ade@b.com",
      password: "akin@a.com",
    });
  };

  //delete data in database
  const deleteData = () => {
    deleteDoc(doctoUpdate)
      .then(alert("data deleted"))
      .catch((err) => alert(err.message));
  };

  //update data in the database in real time
  const onUpdate = () => {
    onSnapshot(collectionRef, (data) => {
      console.log(
        data.docs.map((item) => {
          return item.data();
        })
      );
    });
  };



  //const make a query to the Firestore database
  const ageQuery = query(collectionRef, where("password", "==", "123456"))

  const getQuery = () => {
    onSnapshot(ageQuery, (data) => {
      console.log(
        data.docs.map((item) => {
          return item.data();
        })
      )
    })
  }

  useEffect(() => {
    getQuery();
  }, []);

  return (
    <div>
      <button onClick={onUpdate}>Get Data</button>
      <button onClick={updateData}>Update Data</button>
      <button onClick={deleteData}>Delete Data</button>
    </div>
  );
};

export default Home;
