"use client";
import React, { useContext, createContext, useState, useEffect } from "react";
import luffy from "../../public/luffy.jpeg";
const AppContext = createContext<any>(undefined);
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({
    name: "Sayan Mukherjee",
    username: "sayanmukherjee",
    thoughts: "Hellow world",
    hashtags: ["hellowworld", "tech"],
    theme: "Dark",
    image: "",
  });
 
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
