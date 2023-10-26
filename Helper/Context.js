"use client";
import React, { createContext } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
  const loggedUser = "Snehasish Ghosh";

  return <MyContext.Provider value={loggedUser}>{children}</MyContext.Provider>;
};

export default Context;
