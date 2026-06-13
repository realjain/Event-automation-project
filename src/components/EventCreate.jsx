// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const EventCreate = () => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     event_date: "",
//     Location: "",
//     deadline: "",
//     event_type: ""
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("/api/events/organizer/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         credentials: "include", // Important to send cookies for auth
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to create event");
//       }

//       // Redirect to organizer page after success
//       navigate("/organizer");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isAuthenticated) {
//     return <p className="text-center mt-10">You must be logged in to create an event.</p>;
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
//       <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">{error}</div>
//         )}

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Event Title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded"
//           />

//           <textarea
//             name="description"
//             placeholder="Event Description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded"
//           />
//         <label className="block text-sm font-medium text-gray-700">Event Date</label> 
//           <input
//             type="date"
//             name="event_date"
//             placeholder="Event Date"
//             value={formData.event_date}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded"
//           />

//           <input
//             type="text"
//             name="Location"
//             placeholder="Location"
//             value={formData.Location}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded"
//           />
//         <label className="block text-sm font-medium text-gray-700">Registration Deadline</label>
//           <input
//             type="date"
//             name="deadline"
//             placeholder="Registration Deadline"
//             value={formData.deadline}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded"
//           />

//           <input
//             type="text"
//             name="event_type"
//             placeholder="Event Type"
//             value={formData.event_type}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? "Creating..." : "Create Event"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EventCreate;




import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const EventForm = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams(); // id will be defined if editing

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_date: "",
    Location: "",
    deadline: "",
    event_type: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch existing event data if editing
  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        try {
          const res = await fetch(`/api/events/${id}`, {
            method: "GET",
            credentials: "include",
          });
          if (!res.ok) throw new Error("Failed to fetch event");
          const data = await res.json();

          setFormData({
            title: data.title,
            description: data.description,
            event_date: new Date(data.event_date).toISOString().slice(0, 10),
            Location: data.Location,
            deadline: new Date(data.deadline).toISOString().slice(0, 10),
            event_type: data.event_type,
          });
        } catch (err) {
          console.error(err);
          setError(err.message);
        }
      };
      fetchEvent();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = id
        ? `/api/events/organizer/edit/${id}` // edit mode
        : "/api/events/organizer/create"; // create mode

      const method = id ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to save event");

      // Redirect back to organizer page after success
      navigate("/organizer");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return <p className="text-center mt-10">You must be logged in to create or edit an event.</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {id ? "Edit Event" : "Create Event"}
        </h2>

        {error && <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">{error}</div>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <label className="block text-sm font-medium text-gray-700">Event Date</label>
          <input
            type="date"
            name="event_date"
            value={formData.event_date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="Location"
            placeholder="Location"
            value={formData.Location}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <label className="block text-sm font-medium text-gray-700">Registration Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="event_type"
            placeholder="Event Type"
            value={formData.event_type}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (id ? "Updating..." : "Creating...") : id ? "Update Event" : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;