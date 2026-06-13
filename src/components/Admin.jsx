// Admin.jsx
import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Admin = () => {
  const { events, eventdelete, notices, noticedelete,logout } = useContext(AuthContext); // added noticedelete
  const [eventList, setEventList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);
  const navigate=useNavigate()

  // Fetch events
  const fetchEvents = async () => {
    const data = await events();
    setEventList(data || []);
  };

  // Fetch notices
  const fetchNotices = async () => {
    const data = await notices();
    setNoticeList(data || []);
  };

  useEffect(() => {
    fetchEvents();
    fetchNotices();
  }, [events, notices]);

  // Delete event
  const handleDeleteEvent = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      await eventdelete(id);
      fetchEvents();
    }
  };

  //edit notices

  const handleedit=(id)=>{
    navigate(`/admin/notices/${id}`)
  }

  //create notices

  const handleCreateNotices=()=>{
      console.log("Clickeddd..")
      navigate('/admin/notices')
  }

  // Delete notice
  const handleDeleteNotice = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this notice?");
    if (confirmDelete) {
      await noticedelete(id);
      fetchNotices();
    }
  };

  const Adminlogout=async()=>{
    await logout();
    navigate('/login')
  };

  return (
    <>
    <div className='flex justify-between p-1 m-1'>
      <h1 className='mt-2 text-3xl font-bold text-center'>Admin Dashboard</h1>
      <button className='flex items-center justify-center gap-2 rounded p-2 font-semibold  text-white bg-red-600 ' onClick={Adminlogout}>Log Out <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg> </button>

    </div>
   
    <div className="min-h-screen bg-gray-100 p-6">
      {/* EVENTS SECTION */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Events</h1>
      {eventList.length === 0 ? (
        <p className="text-gray-600 mb-6">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10" >
          {eventList.map((event) => (
            <div
              key={event._id}
              className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
              >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-semibold">Location:</span> {event.Location}
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-semibold">Event Date:</span>{" "}
                {new Date(event.event_date).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-semibold">Deadline:</span>{" "}
                {new Date(event.deadline).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-sm mb-3">
                <span className="font-semibold">Type:</span> {event.event_type}
              </p>
              <p className="text-gray-500 text-sm mb-3">
                <span className="font-semibold">Registered Users:</span>{" "}
                {event.RegisteredUsers.length}
              </p>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                onClick={() => handleDeleteEvent(event._id)}
                >
                Delete
              </button>
              
            </div>
          ))}
        </div>
      )}

      {/* NOTICES SECTION */}
      <div className='flex items-center justify-between mb-2'>

      <h1 className="text-3xl font-bold mb-6 text-gray-800"> Notices</h1>
      <button className='p-2 bg-green-500 text-white font-semibold  rounded-xl' onClick={handleCreateNotices}>
        Create New Notices
      </button>
      </div>
      {noticeList.length === 0 ? (
        <p className="text-gray-600">No notices found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticeList.map((notice) => (
            <div
            key={notice._id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{notice.title}</h2>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-semibold">Posted On:</span>{" "}
                {new Date(notice.date_posted).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-semibold">Deadline:</span>{" "}
                {new Date(notice.deadline).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mb-3">{notice.description}</p>
              <div className='flex items-center justify-between'>

              <button
                className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                onClick={() => handleedit(notice._id)}
                >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                onClick={() => handleDeleteNotice(notice._id)}
              >
                Delete
              </button>
              </div>
            </div>
          ))}

        </div>
      )}
    
    </div>
    </>
  );
};

export default Admin;