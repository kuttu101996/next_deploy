"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "@/Helper/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState([]);
  const loggedUser = useContext(MyContext);
  console.log(loggedUser);
  const getUser = async () => {
    const allData = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setUserData(allData.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const notify = () => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <h1>1:05 min</h1>
      <h2>{loggedUser}</h2>
      <button onClick={notify}>Notify</button>
      <ToastContainer limit={2} newestOnTop={false} />
      <button
        onClick={getUser}
        className="border-1 border-black rounded text-lg px-6 py-4 bg-green-600"
      >
        Get Data
      </button>
      <div className="bg-slate-100 p-7">
        {userData.map((ele) => {
          return (
            <div key={ele.id}>
              <h2>
                {ele.name} ----- <Link href={`/${ele.id}`}>View</Link>
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contact;
