import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [eventCount, seteventCount] = useState(0);
  const [noticeCount, setnoticeCount] = useState(0);
  useEffect(() => {
    try {
      const tokendata = localStorage.getItem("token");
      if (tokendata) {
        const userData = JSON.parse(tokendata);
        setUsername(userData.name);
        seteventCount(userData.eventCount || 0);
        setnoticeCount(userData.noticeCountCount || 0);
      }
    } catch {
      localStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  }, []);
 
  const value = {
    username,
    setUsername,
    eventCount,
    seteventCount,
    noticeCount,
    setnoticeCount,
    isLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  return useContext(UserContext);
}
