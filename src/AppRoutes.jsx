
// // import React, { useContext } from "react";
// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // import { AuthContext } from "./context/AuthContext";
// // import Admin from './components/Admin'
// // import Login from "./components/Login";
// // import Signup from "./components/Signup";
// // import Events from "./components/navbar/Events";
// // import Notices from "./components/navbar/Notices";
// // import Achievements from "./components/navbar/Achievements";
// // import Home from "./components/navbar/Home";
// // import Navbar from "./components/navbar/Navbar";
// // import Organizer from "./components/Organizer";
// // const AppRoutes = () => {
// //   const { isAuthenticated, loading } = useContext(AuthContext);

// //   if (loading) return <div>Loading...</div>;
// // console.log("AppRoutes auth:", isAuthenticated);
// //   return (
// //     <>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/admin" element={<Admin />} />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route
// //           path="/home"
// //           element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
// //         />
// //         <Route path="/organizer" element={isAuthenticated ? <Organizer /> : <Navigate to="/login" />} />
// //         <Route path="/events" element={<Events />} />
// //         <Route path="/notices" element={<Notices />} />
// //         <Route path="/achievements" element={<Achievements />} />
// //       </Routes>
// //     </>
// //   );
// // };
// // export default AppRoutes



// // AppRoutes.jsx
// import React, { useContext } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Home from "./components/navbar/Home";
// import Organizer from "./components/Organizer";
// import Admin from "./components/Admin";
// import Navbar from "./components/navbar/Navbar";
// import EventCreate from "./components/EventCreate";
// import Events from "./components/navbar/Events";
// import Notices from "./components/navbar/Notices";
// import NoticeCreate from "./components/NoticeCreate";
// import StudentLayout from "./components/StudentLayout";

// const AppRoutes = () => {
//   const { isAuthenticated, role, loading } = useContext(AuthContext);
//   console.log("value from approutes.jsx:",isAuthenticated)

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-gray-500 text-xl">Loading...</p>
//       </div>
//     );

//   return (
//     <>
      
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* protected routes */}

//         <Route element={isAuthenticated && role==='student'? <StudentLayout/>:<Navigate to='/login'/>} />
//         <Route
//           path="/home"
//           element={isAuthenticated && role === "student" ? <Home /> : <Navigate to="/login" />}
//         />
//         <Route path='/events' element={isAuthenticated ? <Events /> : <Navigate to="/login" />} />
//         <Route path='/notices' element={isAuthenticated ? <Notices /> : <Navigate to="/login" />} />
//                   <Route
//           path="/organizer"
//           element={isAuthenticated && role === "organizer" ? <Organizer /> : <Navigate to="/login" />}
//         />
//         <Route path="/organizer/create" element={isAuthenticated && role === "organizer" ? <EventCreate /> : <Navigate to="/login" />} />

//         <Route path='/admin/notices' element={isAuthenticated && role==='admin'?<NoticeCreate/>:<Navigate to='/login'/>} />
//         <Route path='/admin/notices/:id' element={isAuthenticated && role==='admin'?<NoticeCreate editMode={true}/>:<Navigate to='/login'/>} />
//         <Route path="/organizer/edit/:id" element={isAuthenticated && role === "organizer" ? <EventCreate  /> : <Navigate to="/login" />} />
//         <Route 
//           path="/admin"
//           element={isAuthenticated && role === "admin" ? <Admin /> : <Navigate to="/login" />}
//         />
//       </Routes>
//     </>
//   );
// };

// export default AppRoutes;




import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/navbar/Home";
import Organizer from "./components/Organizer";
import Admin from "./components/Admin";
import EventCreate from "./components/EventCreate";
import Events from "./components/navbar/Events";
import Notices from "./components/navbar/Notices";
import NoticeCreate from "./components/NoticeCreate";
import StudentLayout from "./components/StudentLayout";

const AppRoutes = () => {
  const { isAuthenticated, role, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <Routes>

      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Public Routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* ================= STUDENT ROUTES WITH NAVBAR ================= */}
      <Route
        element={
          isAuthenticated && role === "student"
            ? <StudentLayout />
            : <Navigate to="/login" />
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/notices" element={<Notices />} />
      </Route>

      {/* ================= ORGANIZER ROUTES ================= */}
      <Route
        path="/organizer"
        element={
          isAuthenticated && role === "organizer"
            ? <Organizer />
            : <Navigate to="/login" />
        }
      />
      <Route
        path="/organizer/create"
        element={
          isAuthenticated && role === "organizer"
            ? <EventCreate />
            : <Navigate to="/login" />
        }
      />
      <Route
        path="/organizer/edit/:id"
        element={
          isAuthenticated && role === "organizer"
            ? <EventCreate />
            : <Navigate to="/login" />
        }
      />

      {/* ================= ADMIN ROUTES ================= */}
      <Route
        path="/admin"
        element={
          isAuthenticated && role === "admin"
            ? <Admin />
            : <Navigate to="/login" />
        }
      />
      <Route
        path="/admin/notices"
        element={
          isAuthenticated && role === "admin"
            ? <NoticeCreate />
            : <Navigate to="/login" />
        }
      />
      <Route
        path="/admin/notices/:id"
        element={
          isAuthenticated && role === "admin"
            ? <NoticeCreate editMode />
            : <Navigate to="/login" />
        }
      />

    </Routes>
  );
};

export default AppRoutes;