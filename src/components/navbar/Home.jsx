// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button";
// import Count_cards from "../Count_cards";
// import Notice_card from "../Notices/Notice_card";
// import Event_card from "../Events/Event_card";
// import { useUser } from "../contexts/UserContext";

// const Home = () => {
//   const {eventCount,noticeCount}=useUser()
//   return (
//     <>
//       <div className="container  m-6 p-3 w-screen bg-white rounded shadow-md flex flex-col gap-4">
//         <h2>Hello,User</h2>
//         <p>Stay updated with all college updates</p>
//         <div className="flex gap-2 ">
//           <Button
//             name="View Upcoming Events"
//             onclick={() => {
//               console.log("View Events clicked");
//             }}
//           />
//           <Button
//             name="View Latest Notice"
//             onclick={() => {
//               console.log("View Latest Notice clicked");
//             }}
//           />
//         </div>
//         <div className="count flex items-center justify-center gap-50 rounded p-2 bg-red-100 ">
//           <Count_cards content="Active Notices" noticeCount={noticeCount}  />

//           <Count_cards content="Events" eventCount={eventCount} />

//           <Count_cards content="Deadlines"  />

//           <Count_cards content="My Registration" />
//         </div>
//         <div className="alerts  border-2 border-gray-200">
//           <h3 className="flex items-center gap-1.5 p-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="orange"
//               class="bi bi-bell-fill"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
//             </svg>
//             Alerts
//           </h3>
//           <div className="content border-2 border-gray-200 p-2">
//             <p>
//               Tech Fest regitration closes in <b>2 days</b>
//             </p>
//             <p>
//               Sports Meet notice expires <b>today</b>
//             </p>
//           </div>
//         </div>
//         <div className="Latest Notices m-1">
//           <h3 className="font-bold flex items-center gap-2  ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               class="bi bi-newspaper"
//               viewBox="0 0 16 16"
//             >
//               <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
//               <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
//             </svg>
//             Latest Notices
//           </h3>
//           <div className="card flex gap-50 m-2 p-2 items-center ">
//             <Notice_card title="Exam Schedule" date="10 Jan" days="3" buttonText="View details"/>
//             <Notice_card title="Holiday Notice" date="12 Jan" days="1" buttonText="View details"/>
//           </div>
//         </div>
//         <div className="UpcomingEvents w-screen m-1">
        
            
//             <h3 className="flex gap-2 items-center font-bold">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               class="bi bi-calendar-event"
//               viewBox="0 0 16 16"
//             >
//               <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
//               <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
//             </svg>
//             Upcoming Events
//           </h3>
//           <div className="card flex gap-50 m-2 p-2 items-center">

//           <Event_card
//             title="Tech Fest 2026"
//             date="20Jan"
//             time="10:00AM"
//             location="Auditorium"
//             buttonText="Register Now"
//             variant={"home"}
//             onClick={()=>{alert("button clicked")}}

          
//           />
//           <Event_card
//             title="cultural fest 2026"
//             date="24Jan"
//             time="7:00pM"
//             location="Open Ground"
//             buttonText="View Details"
//           />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



//Mobile View
// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button";
// import Count_cards from "../Count_cards";
// import Notice_card from "../Notices/Notice_card";
// import Event_card from "../Events/Event_card";
// import { useUser } from "../contexts/UserContext";

// const Home = () => {
//   const { eventCount, noticeCount } = useUser();

//   return (
//     <>
//       <div className="w-full max-w-4xl mx-auto m-6 p-6 bg-white rounded-lg shadow-md overflow-x-hidden">
//         {/* Header */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Hello, User</h2>
//           <p className="text-gray-600">Stay updated with all college updates</p>
//           <div className="flex flex-col sm:flex-row gap-3 mt-6 max-w-full">
//             <Button
//               name="View Upcoming Events"
//               onclick={() => {
//                 console.log("View Events clicked");
//               }}
//             />
//             <Button
//               name="View Latest Notice"
//               onclick={() => {
//                 console.log("View Latest Notice clicked");
//               }}
//             />
//           </div>
//         </div>

//         {/* Count Cards */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg mb-8 max-w-full overflow-x-hidden">
//           <Count_cards content="Active Notices" noticeCount={noticeCount} />
//           <Count_cards content="Events" eventCount={eventCount} />
//           <Count_cards content="Deadlines" />
//           <Count_cards content="My Registration" />
//         </div>

//         {/* Alerts */}
//         <div className="border border-gray-200 rounded-lg mb-8 overflow-hidden">
//           <h3 className="flex items-center gap-2 p-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-800">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="orange"
//               className="bi bi-bell-fill"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
//             </svg>
//             Alerts
//           </h3>
//           <div className="p-4 space-y-2">
//             <p>
//               Tech Fest registration closes in <b>2 days</b>
//             </p>
//             <p>
//               Sports Meet notice expires <b>today</b>
//             </p>
//           </div>
//         </div>

//         {/* Latest Notices */}
//         <div className="mb-8">
//           <h3 className="flex items-center gap-2 mb-4 font-bold text-lg text-gray-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-newspaper"
//               viewBox="0 0 16 16"
//             >
//               <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
//               <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
//             </svg>
//             Latest Notices
//           </h3>
//           <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-lg max-w-full overflow-x-hidden">
//             <Notice_card title="Exam Schedule" date="10 Jan" days="3" buttonText="View details" />
//             <Notice_card title="Holiday Notice" date="12 Jan" days="1" buttonText="View details" />
//           </div>
//         </div>

//         {/* Upcoming Events */}
//         <div>
//           <h3 className="flex gap-2 items-center mb-4 font-bold text-lg text-gray-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-calendar-event"
//               viewBox="0 0 16 16"
//             >
//               <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
//               <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
//             </svg>
//             Upcoming Events
//           </h3>
//           <div className="flex flex-col lg:flex-row gap-4 p-4 bg-blue-50 rounded-lg max-w-full overflow-x-hidden">
//             <Event_card
//               title="Tech Fest 2026"
//               date="20Jan"
//               time="10:00AM"
//               location="Auditorium"
//               buttonText="Register Now"
//               variant="home"
//               onClick={() => { alert("button clicked"); }}
//             />
//             <Event_card
//               title="cultural fest 2026"
//               date="24Jan"
//               time="7:00pM"
//               location="Open Ground"
//               buttonText="View Details"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../Button";
import Count_cards from "../Count_cards";
import Notice_card from "../Notices/Notice_card";
import Event_card from "../Events/Event_card";

import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  
  const {username}=useContext(AuthContext)
  const Navigate=useNavigate()
  

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6 lg:px-12 bg-gray-50 min-h-screen">
      {/* Main Card Container */}
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center lg:text-left mb-12 ">
          <h2 className="text-4xl lg:text-5xl font-bold  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Hello, {username}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Stay updated with all college updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
            <Button
              name="View Upcoming Events"
              onclick={() =>{
                // alert("clicked")
                Navigate('/events')
              } }
            />
            <Button
              name="View Latest Notice"
              onclick={() => Navigate('/notices')}
            />
          </div>
        </div>

        
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
  <Count_cards content="Active Notices" />
  <Count_cards content="Events"  />
  <Count_cards content="Deadlines" />
  <Count_cards content="My Registration" />
</div>






        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Alerts Section */}
          <div className="bg-gradient-to-br from-red-50 to-red-50 border-2 border-red-50 rounded-2xl p-8 shadow-lg">
            <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#f59e0b"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              Alerts
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border-l-4 border-yellow-400">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg">
                  Tech Fest registration closes in <b className="text-red-600">2 days</b>
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border-l-4 border-orange-400">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg">
                  Sports Meet notice expires <b className="text-red-600">today</b>
                </p>
              </div>
            </div>
          </div>

          {/* Latest Notices */}
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg">
            <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-newspaper"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
              </svg>
              Latest Notices
            </h3>
            <div className="space-y-4">
              <Notice_card title="Exam Schedule" date="10 Jan" days="3" buttonText="View details" />
              <Notice_card title="Holiday Notice" date="12 Jan" days="1" buttonText="View details" />
            </div>
          </div>
        </div>

        {/* Upcoming Events - Full Width */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-2xl p-8 shadow-lg">
          <h3 className="flex items-center gap-3 mb-8 text-2xl font-bold text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-calendar-event"
              viewBox="0 0 16 16"
            >
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Event_card
              title="Tech Fest 2026"
              date="20Jan"
              time="10:00AM"
              location="Auditorium"
              buttonText="Register Now"
              variant="home"
              onClick={() => { alert("button clicked"); }}
            />
            <Event_card
              title="cultural fest 2026"
              date="24Jan"
              time="7:00pM"
              location="Open Ground"
              buttonText="View Details"
              variant="home"
              onClick={() => { alert("button clicked"); }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
