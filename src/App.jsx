// import React, { useContext } from "react";
// import Navbar from "./components/navbar/Navbar";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Events from "./components/navbar/Events";
// import Notices from "./components/navbar/Notices";
// import Achievements from "./components/navbar/Achievements";
// import Home from "./components/navbar/Home";
// import { UserProvider } from "./components/contexts/UserContext";
import { AuthProvider } from "./context/AuthContext";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// // import ProtectedRoute from "./components/Routes/ProtectedRoute";
// import { AuthContext } from "./context/AuthContext";
// import Admin from "./components/Admin";
// const App = () => {

//   const {isAuthenticated,loading}=useContext(AuthContext)
//   console.log(isAuthenticated,loading)
//   return (
//     <AuthProvider>

//     <UserProvider>
      
//     <BrowserRouter>

//       <Navbar />
//         <Routes>
//           {/* <Route path="/" element={isAuthenticated?<Signup/>:<Login/>} /> */}
//           {/* <Route path="/home" element={<Home />} /> */}
//           <Route path='/admin' element={<Admin/>} />
//           <Route path='/signup' element={<Signup/>} />
//           <Route path='/login' element={<Login/>} />
//           <Route path="/home" element={ loading ? <div className="text-center">Loading...</div> : isAuthenticated?<Home/>:<Navigate to='/login' />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/notices" element={<Notices />} />
//           <Route path="/achievements" element={<Achievements />} />
//         </Routes>
//     </BrowserRouter>
//     </UserProvider>
//     </AuthProvider>
//   );
// };
// export default App;

import AppRoutes from "./AppRoutes";
const App = () => {
  return (
    <AuthProvider>
      
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
     
    </AuthProvider>
  );
};
export default App;