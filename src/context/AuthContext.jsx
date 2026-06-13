import {createContext, useState, useEffect } from "react";
export const AuthContext=createContext()

export const  AuthProvider=({children})=>{
    const [isAuthenticated,setAuthenticated]=useState(false);
    const [username,setUsername]=useState("");
    const [loading,setLoading]=useState(true);
    const [role,setRole]=useState("");

    useEffect( ()=>{
     checkauth();
    },[])
    
    const checkauth=async()=>{
        try{
            const response=await fetch('/api/auth/checkauth',{
                method:'GET',                credentials:'include'
            })
            
           if (response.ok) {
        const data = await response.json();
        setAuthenticated(true);
        setUsername(data.name);
        setRole(data.role);
      } else {
        setAuthenticated(false);
        setUsername("");
        setRole("");
      }
    } catch (err) {
      setAuthenticated(false);
      setUsername("");
      setRole("");
    } finally {
      setLoading(false);
    }
    }
    
    const signup = async (name, email, password, role) => {

  const endpoint =
    role === "organizer"
      ? "/api/auth/organizer/register"
      : "/api/auth/register";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ name, email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  setAuthenticated(true);
  return data.user.role;
};

   const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  // ⚡ Update all states
  setAuthenticated(true);
  setRole(data.user.role);
  setUsername(data.user.name);
  setLoading(false);

  return data.user.role;
};

    const logout = async () => {
    await fetch('/api/auth/logout', {
      method: "POST",
      credentials: "include"
    });

    setAuthenticated(false);
  };

  const events=async()=>{
        const response=await fetch('/api/events',{
            method:'GET',
            credentials:'include'
        })
        const data=await response.json();
        // console.log(data)
        return data;
        
  }

  const eventdelete=async(id)=>{
    const response=await fetch(`/api/events/${id}`,{
        method:'DELETE',
        credentials:'include',
        body:JSON.stringify({id})
    })
    return await response.json()
  }

  const notices=async()=>{
    const response=await fetch('api/notices',{
        method:'GET',
        credentials:'include'
    })

    const data=await response.json()
    console.log(data)
    return data;
  }

  const noticedelete=async(id)=>{
    const response=await fetch(`api/notices/${id}`,{
        method:'DELETE',
        credentials:'include',
        body:JSON.stringify({id})
    })
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,signup,username,loading,events,eventdelete,notices,noticedelete,role}}>
      {children}
    </AuthContext.Provider>
  );
}