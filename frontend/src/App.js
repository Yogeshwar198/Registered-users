import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Fetch users from the backend on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/users`);
        setUsers(response.data);
      } catch (error) {
        toast.error("Error fetching users.");
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [backendUrl]);

  // Add or update a user
  const addUser = async (user) => {
    if (editingUser) {
      // Update user
      try {
        const response = await axios.put(`${backendUrl}/api/users/${editingUser._id}`, user);
        setUsers(users.map((u) => (u._id === editingUser._id ? response.data : u)));
        setEditingUser(null);
        toast.success("User updated successfully!");
      } catch (error) {
        toast.error("Error updating user.");
        console.error("Error updating user:", error);
      }
    } else {
      // Add new user
      try {
        const response = await axios.post(`${backendUrl}/api/users`, user);
        setUsers([response.data, ...users]);
        toast.success("User added successfully!");
      } catch (error) {
        toast.error("Could not add user. Ensure the email is unique and try again.");
        console.error("Error adding user:", error);
      }
    }
  };

  // Delete a user by ID
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
      toast.info("User deleted successfully!");
    } catch (error) {
      toast.error("Error deleting user");
      console.error("Error deleting user:", error);
    }
  };

  // Set user data for editing
  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="min-h-screen bg-gradient-custom p-6 flex items-start justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 md:flex">
        <UserForm addUser={addUser} editingUser={editingUser} />
        <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
}

export default App;
