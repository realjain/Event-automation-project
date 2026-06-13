// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const NoticeCreate = () => {
//   const { isAuthenticated, role } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     date_posted: "",
//     deadline: "",
//     description: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch("/api/notices/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to create notice");
//       }

//       navigate("/admin"); // redirect after success
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isAuthenticated) {
//     return (
//       <p className="text-center mt-10 text-red-500">
//         You must be logged in to create a notice.
//       </p>
//     );
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
//       <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Create Notice
//         </h2>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 mb-4 rounded-lg">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Notice Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Date Posted
//             </label>
//             <input
//               type="date"
//               name="date_posted"
//               value={formData.date_posted}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Deadline
//             </label>
//             <input
//               type="date"
//               name="deadline"
//               value={formData.deadline}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Description
//             </label>
//             <textarea
//               name="description"
//               rows="4"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
//           >
//             {loading ? "Creating..." : "Create Notice"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NoticeCreate;



import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NoticeCreate = ({ editMode = false }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams(); // for edit mode

  const [formData, setFormData] = useState({
    title: "",
    date_posted: "",
    deadline: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);

  // 🔥 Fetch notice if in edit mode
  useEffect(() => {
    if (editMode && id) {
      const fetchNotice = async () => {
        try {
          setFetchLoading(true);

          const res = await fetch(`/api/notices/${id}`, {
            credentials: "include",
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.message || "Failed to fetch notice");
          }

          setFormData({
            title: data.title || "",
            date_posted: data.date_posted
              ? data.date_posted.split("T")[0]
              : "",
            deadline: data.deadline ? data.deadline.split("T")[0] : "",
            description: data.description || "",
          });
        } catch (err) {
          setError(err.message);
        } finally {
          setFetchLoading(false);
        }
      };

      fetchNotice();
    }
  }, [editMode, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔥 Handle Submit (Create + Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const url = editMode
        ? `/api/notices/${id}`
        : `/api/notices/create`;

      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      navigate("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <p className="text-center mt-10 text-red-500">
        You must be logged in.
      </p>
    );
  }

  if (fetchLoading) {
    return <p className="text-center mt-10">Loading notice...</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {editMode ? "Edit Notice" : "Create Notice"}
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 mb-4 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notice Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Posted
            </label>
            <input
              type="date"
              name="date_posted"
              value={formData.date_posted}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading
              ? editMode
                ? "Updating..."
                : "Creating..."
              : editMode
              ? "Update Notice"
              : "Create Notice"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoticeCreate;