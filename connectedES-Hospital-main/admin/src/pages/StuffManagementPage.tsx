// UserManagementPage.tsx
import React from 'react';

const StuffManagementPage: React.FC = () => {
  const users = [
    { name: "John Doe", email: "john.doe@example.com", role: "Doctor" },
    { name: "Jane Smith", email: "jane.smith@example.com", role: "Doctor" },
    { name: "Michael Johnson", email: "michael.j@example.com", role: "Admin" },
    { name: "Emily Brown", email: "emily.brown@example.com", role: "Admin" },
    { name: "David Wilson", email: "david.wilson@example.com", role: "Doctor" },
    { name: "Sarah White", email: "sarah.white@example.com", role: "Nurse" },
    { name: "Kevin Lee", email: "kevin.lee@example.com", role: "Nurse" },
  ];

  return (
    <div className="min-h-screen bg-gray-200 p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <span className="mr-2">➕</span> Add user
        </button>
      </div>

      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Search user"
          className="p-3 rounded-l-lg border border-gray-300 w-1/2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
          🔍 Filter
        </button>
      </div>

      <table className="w-full bg-gray-100 rounded-lg shadow-lg">
        <thead>
          <tr className="text-left bg-gray-300">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Role</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">
                <select
                  defaultValue={user.role}
                  className="border border-gray-300 rounded p-2 bg-white"
                >
                  <option>Doctor</option>
                  <option>Admin</option>
                  <option>Nurse</option>
                </select>
              </td>
              <td className="p-4 space-x-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Deactivate
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StuffManagementPage;
