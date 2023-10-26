"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dynamic = ({ params }) => {
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const { id } = params;
    const allData = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUserData(allData.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      Dynamic Page
      <h3>{userData.name}</h3>
      <h3>{userData.email}</h3>
    </div>
  );
};

export default Dynamic;
