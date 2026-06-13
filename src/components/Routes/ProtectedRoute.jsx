// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const ProtectedRoute = () => {
//   const { isAuthenticated, isloading } = useAuth();
  
//   if (isloading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-lg">Loading...</div>
//       </div>
//     );
//   }
  
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;
