// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useUser } from '../contexts/UserContext'

// const Navbar = () => {
//   const {eventCount} = useUser()
  
 

//   return (
//     <div className='flex items-center justify-between bg-red-500 p-3 text-white'>
     
//       <div className='logo text-xl font-bold'>College Events</div>
      
     
//       <div className="buttons flex items-center justify-center gap-5 underline font-semibold">
//         <Link to="/home" className="hover:text-red-200">Home</Link>
//         <Link to="/events" className="hover:text-red-200 flex items-center gap-1">
//           Events 
          
//         </Link>
//         <Link to="/notices" className="hover:text-red-200">Notices</Link>
//         <Link to="/achievements" className="hover:text-red-200">Achievements</Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar


//new css
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
// import { useUser } from '../contexts/UserContext'

const Navbar = () => {
  // const { eventCount } = useUser()
  const {logout}=useContext(AuthContext);
  const navigate=useNavigate()

  const Userlogout=async()=>{
    await logout();
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/home" className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent hover:from-red-700 hover:to-orange-700 transition-all duration-200">
              College Events
            </Link>
          </div>

          {/* Navigation Links + Event Count */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-2 lg:gap-6">
              <Link 
                to="/home" 
                className="text-gray-700 hover:text-red-600 font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-red-50"
              >
                Home
              </Link>
              
              <Link 
                to="/events" 
                className="text-gray-700 hover:text-red-600 font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-red-50 relative"
              >
                Events
                
              </Link>
              
              <Link 
                to="/notices" 
                className="text-gray-700 hover:text-red-600 font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-red-50"
              >
                Notices
              </Link>
              
              <Link 
                to="/achievements" 
                className="text-gray-700 hover:text-red-600 font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-red-50"
              >
                Achievements
              </Link>
              <button className='flex items-center justify-center gap-2 rounded p-2 font-semibold  text-white bg-red-600 ' onClick={Userlogout}>Log Out <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg> </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-red-600 p-2 rounded-lg hover:bg-red-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
