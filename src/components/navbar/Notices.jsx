// import React, { useEffect, useState } from "react";
// import Notice_card from "../Notices/Notice_card";
// import { useUser } from "../contexts/UserContext";

// const Notices = () => {
//   const { setnoticeCount } = useUser();
//   const [notices] = useState([
//     {
//       id: 1,
//       title: "Exam Schedule",
//       post_date: "01 Feb",
//       days: "20",
//       buttonText: "View Details",
//       variant: "notices",
//       description: "Final year exam schedule has been released",
//     },
//     {
//       id: 2,
//       title: "Exam Schedule",
//       post_date: "01 Feb",
//       days: "20",
//       buttonText: "View Details",
//       variant: "notices",
//       description: "Final year exam schedule has been released",
//     },
//   ]);
//   useEffect(() => {
//     setnoticeCount(notices.length);
//   });
//   return (
//     <>
//       <div>
//         <div className="border-2 border-gray-200 rounded p-4 flex justify-between items-center w-full">
//           <h1 className="font-bold flex gap-2 items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className="bi bi-calendar-event"
//               viewBox="0 0 16 16"
//             >
//               <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
//               <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
//             </svg>
//             Active Notices
//           </h1>
//           <div className="relative w-72">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//               width="16"
//               height="16"
//               fill="currentColor"
//               viewBox="0 0 16 16"
//             >
//               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//             </svg>

//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </div>
//         </div>
//         <div className="m-2 p-2  flex flex-col gap-4">
//           {notices.map((notice) => {
//             return (
//               <Notice_card
//                 title={notice.title}
//                 post_date={notice.post_date}
//                 days={notice.days}
//                 buttonText={notice.buttonText}
//                 variant={notice.variant}
//                 description={notice.description}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notices;



//new css
import React, { useContext, useEffect, useState } from "react";
import Notice_card from "../Notices/Notice_card";
import { AuthContext } from "../../context/AuthContext";


const Notices = () => {
  const [noticelist,setnoticeslist]=useState([]);
  const {notices}=useContext(AuthContext)
 
  
  useEffect(() => {
      const fetchNotices=async()=>{
        try{
          const response =await fetch('api/notices',{
            method:'GET',
            credentials:'include'
          })
          const data=await response.json();
          setnoticeslist(data)
        } 
          catch(err){
            console.error("Error fetching notices:", err);
          }
        }
      fetchNotices()
  },[notices])

 
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6 lg:px-12 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <h1 className="text-3xl lg:text-4xl font-bold flex items-center gap-3 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#ef4444"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            Active Notices
          </h1>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search notices..."
              className="w-full pl-12 pr-6 py-3 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 bg-gray-50/50 transition-all duration-200 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Notices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-8">
        {noticelist.map((notice) => (
          <div 
            key={notice.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
          >
            <Notice_card
              title={notice.title}
              post_date={notice.date_posted}
              deadline={notice.deadline}
              
             
              description={notice.description}
            />
          </div>
        ))}
      </div>

      {/* Empty State or Load More */}
      {noticelist.length < 6 && (
        <div className="col-span-full mt-16 text-center py-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-16 w-16 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 0v6m0-6H4m15 0h-6m0 0v6m0-6V6" />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-500 mb-2">No more notices</h3>
          <p className="text-gray-400 text-lg">All active notices are displayed above</p>
        </div>
      )}
    </div>
  );
};

export default Notices;
