// import React from "react";

// const Events = () => {
//   return (
//     <>
//       <div className="m-3">
//         <div className="upcoming_events border-2 border-gray-200 rounded p-4 flex justify-between">
//           <h1 className="font-bold flex gap-2 items-center">
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
//           </h1>
//           <div className="search">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-150 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* <svg
//               className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M21 21l-4.35-4.35m1.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg> */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               class="bi bi-search"
//               viewBox="0 0 16 16"
//             >
//               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Events;

// import React, { useEffect, useState } from "react";
// import Btn from "../Btn";
// import Event_card from "../Events/Event_card";
// import { useUser } from "../contexts/UserContext";

// const Events = () => {
//   const {seteventCount}=useUser()
//   const [events] = useState([
//     {
//       id: 1,
//       title: "Tech Fest 2026",
//       date: "20Jan",
//       time: "10:00AM",
//       location: "Open Ground",
//       variant: "events",
//       buttonText: "Register Now",
//       category: "Technical",
//       disabled: "true",
//       deadline: "12 feb",
//       no_of_registration: 100,
//     },
//     {
//       id: 2,
//       title: "Tech Fest 2026",
//       date: "20Jan",
//       time: "10:00AM",
//       location: "Open Ground",
//       variant: "events",
//       buttonText: "Register Now",
//       category: "Technical",
//       disabled: "true",
//       deadline: "12 feb",
//       no_of_registration: 100,
//     },
//   ]);
//   useEffect(()=>{
//     seteventCount(events.length)
//   },[])
//   return (
//     <>
//       <div className=" container m-3 w-full">
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
//             Upcoming Events
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
//         {/* Main Page Contains */}

//         <div className="btnfilter m-3 flex items-center gap-1 border-top-2">
//           <Btn name="All" />
//           <Btn name="Technical" />
//           <Btn name="Cultural" />
//           <Btn name="Sports" />
//         </div>
//         <div className="flex flex-col gap-4">
//           {events.map((event) => {
//              return <Event_card
//               title={event.title}
//               date={event.date}
//               time={event.time}
//               location={event.location}
//               variant={event.variant}
//               buttonText={event.buttonText}
//               category={event.category}
//               disabled={event.disabled}
//               deadline={event.deadline}
//               no_of_registration={event.no_of_registration}
//             />;
//           })}
//           {/* <Event_card
//              title="Tech Fest 2026"
//              date="20Jan"
//              time="10:00AM"
//              location="Open Ground"
//              variant="events"
//              buttonText="Register Now"
//              category="Technical"
//              disabled="true" 
//              deadline="12 feb"
//              no_of_registration={100}/>

//             <Event_card
//              title="Annual Cultural Fest"
//              date="20 Nov"
//              time="9:00 AM - 4:00 PM"
//              location="Open Ground"
//              variant="events"
//              buttonText="Register Now"
//              category="Cultural"
//              disabled="true" 
//              deadline="15 Nov"
//              no_of_registration={54}/>

//             <Event_card
//              title="College Sports Meet"
//              date="26 Nov"
//              time="9:00 AM - 4:00 PM"
//              location="College"
//              variant="events"
//              buttonText="Register Now"
//              category="Sports"
//              disabled="true" 
//              deadline="15 Nov"
//              no_of_registration={54}/> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Events;


//new css
import React, { useContext, useEffect, useState } from "react";
import Btn from "../Btn";
import Event_card from "../Events/Event_card";
import { AuthContext } from "../../context/AuthContext";


const Events = () => {
  const [eventlist,seteventlist]=useState([])
  const {events}=useContext(AuthContext)
  
  
  useEffect(() => {
    const fetchEvents=async()=>{
      try{
        const response =await fetch('api/events',{
          method:'GET',
          credentials:'include'
        })
        const data=await response.json();
        seteventlist(data)
      } 
        catch(err){
          console.error("Error fetching events:", err);
        }
      }
    fetchEvents()
},[events])

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
              fill="currentColor"
              className="bi bi-calendar-event"
              viewBox="0 0 16 16"
            >
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            Upcoming Events
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
              placeholder="Search events..."
              className="w-full pl-12 pr-6 py-3 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 bg-gray-50/50 transition-all duration-200 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
     <div className="flex flex-wrap items-center gap-4 mb-12 p-6 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl shadow-sm">
  <Btn name="All" active={true} />
  <Btn name="Technical" />
  <Btn name="Cultural" />
  <Btn name="Sports" />
</div>


      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-8">
        {eventlist.map((event) => (
          <Event_card
            key={event.id}
            title={event.title}
            date={event.date_posted}
            event_data={event.event_date}
            location={event.Location}
            description={event.description}
            category={event.event_type}
            
            
            
            
            deadline={event.deadline}
            no_of_registration={event.RegisteredUsers.length}
          />
        ))}
      </div>

      {/* Add More Events Placeholder */}
      {eventlist.length < 6 && (
        <div className="col-span-full mt-12 text-center py-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-500 mb-4">No more events</h3>
          <p className="text-gray-400">Check back later for more upcoming events</p>
        </div>
      )}
    </div>
  );
};

export default Events;

