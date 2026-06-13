// import React, { useState } from 'react'
// import { useAuth } from './contexts/AuthContext'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const [name,setName]=useState('')
//     const [error,setError]=useState('')
//     const {signup}=useAuth()
//     const navigate=useNavigate()
//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signup(email, password, name);
//       navigate('/home');
//     } catch (err) {
//       setError(err.message);
//     }
//   };
//   return (
//     <>
// <form className="space-y-6">
//       <input placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
//       <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//       <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
//       <button>Sign Up</button>
//     </form>
//     </>
//   )
// }

// export default Signup

//----------------------------------------------------------------------------
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student"); // default role
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let role=await signup(name, email, password, role);
      console.log("Signup successful, role:", role);
      if(role==="organizer" ){
        navigate('/organizer')
      }
      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-600">Join College Events today</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500"
              placeholder="Create a password"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={loading}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500"
            >
              <option value="student">Student</option>
              <option value="organizer">Organizer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-600 font-semibold hover:text-red-500"
            >
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;