// import React, { useState } from 'react'
// import { useAuth } from './contexts/AuthContext'
// import { Link, useNavigate } from 'react-router-dom'

// const Login = () => {
//     const {login}=useAuth()
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [error,setError]=useState("")
//     const [loading,setloading]=useState(false)
//     const Navigate=useNavigate()
//     const handleSubmit= async(e)=>{
//         e.preventDefault();
//         setloading(true)
//         try{
//             login(email,password)
//             Navigate('/home')
//         }catch(err){
//             setError(err.message)
//         }finally{
//             setloading(false)
//         }
//     }
//   return (
//     <>
//         <div>
//             <form action="" onSubmit={handleSubmit}>
//                     <div className='email'>
//                         <label htmlFor="email">Email</label>
//                         <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
//                     </div>
//                     <div className='password'>
//                         <label htmlFor="password">Password</label>
//                         <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />

//                     </div>
//                     <div className='button'>
//                         <button type="submit" disabled={loading}>
//                             {loading ? 'Signing in...' : 'Sign In'}
//                         </button>
//                     </div>
//                     <div>
//                         <span>Does not have any account <Link to='/signup'>Sign up</Link></span>
//                     </div>

//             </form>
//         </div>
//     </>
//   )
// }

// export default Login

import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const role = await login(email, password); // login returns role
    console.log("Logged in as:", role);
    console.log(isAuthenticated)

    if (role === "admin") {
      navigate("/admin");
    } else if (role === "organizer") {
      navigate("/organizer");
    } else {
      navigate("/home");
    }
  } catch (err) {
    setError(err.message || "Login failed"); // always show error
    console.log("Login error:", err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-1">Login to your account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl shadow-sm transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-red-600 font-semibold hover:text-red-500 transition"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
