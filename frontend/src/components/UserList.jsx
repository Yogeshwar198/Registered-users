// src/components/UserList.js
import React from "react";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";

function UserList({ users, deleteUser, editUser }) {
  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-2xl font-extrabold mb-4 flex items-center">
        <FaUsers className="text-yellow-500 mr-2" /> Registered Users
      </h2>
      {users.length === 0 ? (
        <p className="text-gray-500">No users registered yet.</p>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {users.map((user) => (
            <div
              key={user._id}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">DOB: {new Date(user.dob).toLocaleDateString()}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => editUser(user)}
                  className="text-green-700 hover:text-green-500"
                >
                  <MdEditNote size={24} />
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaRegTrashAlt size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
