"use client";
import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [indexDataProject, setIndexDataProject] = useState(0);
  return (
    <DataContext.Provider value={{ indexDataProject, setIndexDataProject }}>
        {children}
    </DataContext.Provider>
    );
};
