// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const Organizer = () => {
//     const [eventlist, setEventList] = useState([]);
//     const { isAuthenticated,loading } = useContext(AuthContext);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const response = await fetch('/api/events/organizer/events', {
//                     method: 'GET',
//                     credentials: 'include'
//                 });
//                 const data = await response.json();
//                 setEventList(data);
//             } catch (err) {
//                 console.error("Error fetching organizer events:", err);
//             }
//         };
//         if (isAuthenticated) fetchEvents();
//     }, [isAuthenticated]);
//     if(loading){
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <p className="text-gray-500 text-xl">Loading...</p>
//             </div>
//         )
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Events</h2>

//             {eventlist.length === 0 ? (
//                 <p className="text-center text-gray-500">No events found</p>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {eventlist.map(event => (
//                         <div key={event._id} className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow">
//                             <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
//                             <p className="text-gray-600 mb-2">{event.description}</p>
//                             <p className="text-sm text-gray-500 mb-1">
//                                 📍 Location: {event.Location}
//                             </p>
//                             <p className="text-sm text-gray-500 mb-1">
//                                 📅 Event Date: {new Date(event.event_date).toLocaleDateString()}
//                             </p>
//                             <p className="text-sm text-gray-500 mb-1">
//                                 ⏰ Deadline: {new Date(event.deadline).toLocaleDateString()}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                                 📝 Type: {event.event_type}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Organizer;



import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Organizer = () => {
  const [eventlist, setEventList] = useState([]);
  const { isAuthenticated, role, loading, eventdelete,logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!isAuthenticated || role !== "organizer")) {
      navigate("/login");
      return;
    }

    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events/organizer/events", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setEventList(data);
      } catch (err) {
        console.error("Error fetching organizer events:", err);
      }
    };

    if (isAuthenticated && role === "organizer") fetchEvents();
  }, [isAuthenticated, role, loading, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-xl">Loading...</p>
      </div>
    );
  }

  const handleCreateEvent = () => {
    navigate("/organizer/create");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      let response=await eventdelete(id);
      // Remove the deleted event from the list locally
      console.log(response)
      setEventList((prev) => prev.filter((event) => event._id !== id));
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/organizer/edit/${id}`);
  };

  const Organizerlogout=async()=>{
    await logout();
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex items-center justify-between mb-3">
      
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Events</h2>
      <div className="flex justify-center items-center gap-2">

        <button
          className="rounded-xl p-2 font-semibold text-white bg-blue-500 hover:bg-orange-600 transition"
          onClick={handleCreateEvent}
          >
          Create New Event
        </button>
      
      <button className='flex items-center justify-center gap-2 rounded-xl p-2 font-semibold  text-white bg-red-600 ' onClick={Organizerlogout}>Log Out <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg> </button>
          </div>
      </div>

      {eventlist.length === 0 ? (
        <p className="text-center text-gray-500">No events found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventlist.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500 mb-1">📍 Location: {event.Location}</p>
              <p className="text-sm text-gray-500 mb-1">
                📅 Event Date: {new Date(event.event_date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                ⏰ Deadline: {new Date(event.deadline).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500 mb-3">📝 Type: {event.event_type}</p>

              <div className="flex justify-between mt-2">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md font-semibold text-sm"
                  onClick={() => handleEdit(event._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md font-semibold text-sm"
                  onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      
    </div>
  );
};

export default Organizer;