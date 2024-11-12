import React, { useState, useEffect } from "react";
import { FaRegUser, FaUserEdit } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";

function UserForm({ addUser, editingUser }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
  });

  // Populate form with user data when editing
  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name || "",
        email: editingUser.email || "",
        dob: editingUser.dob || "",
      });
    }
  }, [editingUser]);

  // Handle form submission for adding or editing a user
  const handleSubmit = (e) => {
    e.preventDefault();
    
    addUser(formData);
    setFormData({ name: "", email: "", dob: "" });
  };

  // Handle input changes for each field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-2xl font-extrabold mb-4 flex items-center">
        {editingUser ? (
          <>
            <FaUserEdit className="text-yellow-500 mr-2" /> EDIT USER
          </>
        ) : (
          <>
            <HiUserAdd className="text-yellow-500 mr-2" /> ADD NEW USER
          </>
        )}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {/* ------------------- Name Input ------------------ */}
          <label className="block text-gray-600">Name</label>
          <div className="flex items-center border border-gray-300 rounded">
            <FaRegUser className="text-gray-500 ml-2" />
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 focus:outline-none placeholder-gray-400"
              required
            />
          </div>
        </div>
        {/* ------------------- Email Input ------------------ */}
        <div>
          <label className="block text-gray-600">Email</label>
          <div className="flex items-center border border-gray-300 rounded">
            <MdOutlineEmail className="text-gray-500 ml-2" />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              disabled={!!editingUser}
              className="w-full p-2 focus:outline-none placeholder-gray-400"
              required
            />
          </div>
        </div>
        {/* ------------------- DOB Input ------------------ */}
        <div>
          <label className="block text-gray-600">Date of Birth</label>
          <div className="flex items-center border border-gray-300 rounded">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* ------------- Submit button ----------- */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
        >
          {editingUser ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
