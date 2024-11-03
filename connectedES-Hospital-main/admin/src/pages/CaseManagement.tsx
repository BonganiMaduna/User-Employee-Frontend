import React, { useState } from 'react';
import filter from "../../public/assets/filter.png";
import addUser from "../../public/assets/add-user.png";
import { Case } from "../../types/type";

const CaseManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [addCase, setAddCase] = useState(false);
  const [editCase, setEditCase] = useState(null);
  const [newCases, setNewCases] = useState([
    { id: 1, patientName: "Gift Mamarara", priorityLevel: "Medium", status: "New" },
    { id: 2, patientName: "Lethabo Rabutla", priorityLevel: "Medium", status: "In Progress" },
    { id: 3, patientName: "Bongani Maduna", priorityLevel: "Medium", status: "Completed" },
  ]);

  const handleAddCase = (newCase: Case) => {
    setNewCases([...newCases, newCase]);
    setAddCase(false);
  };

  const handleUpdateCase = (updatedCase: Case) => {
    setNewCases(newCases.map(caseItem => 
      caseItem.id === updatedCase.id ? updatedCase : caseItem
    ));
    setEditCase(null);
  };

  const handleDeleteCase = (caseId: number) => {
    setNewCases(newCases.filter(caseItem => caseItem.id !== caseId));
  };

  const filteredCases = newCases.filter((caseItem) =>
    caseItem.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseItem.priorityLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseItem.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex">
      <div className="flex-grow bg-gray-200 p-6">
        <div className="flex items-center mb-6 mt-5">
          <input
            type="text"
            placeholder="Search case"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-400 rounded-lg px-4 py-2 w-[700px] h-14 focus:outline-none focus:ring focus:ring-gray-400"
          />
          <button className="flex items-center ml-6 bg-blue-500 text-white rounded-lg px-3 py-2 w-32 h-14">
            <img 
              src={filter} 
              alt="Filter" 
              className="h-7 mr-2 filter brightness-0 invert" 
            /> 
            Filter
          </button>
          <button
            className="flex items-center ml-4 bg-blue-500 text-white rounded-lg px-3 py-2 w-40 h-14"
            onClick={() => setAddCase(true)}
          >
            <img 
              src={addUser} 
              alt="Case Actions" 
              className="h-7 mr-2 filter brightness-0 invert" 
            /> 
            Add Case
          </button>
        </div>

        <div className="bg-white w-full h-[600px] border-gray-300 border rounded-lg mt-5">
          <p className="py-3 ml-5 text-lg font-semibold">New Cases</p>

          <div className="border border-gray-400 rounded-lg h-[530px] overflow-hidden mx-5">
            <div className="overflow-y-auto max-h-[500px]">
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Patient Name</th>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Priority Level</th>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Status</th>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Edit</th>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCases.map((caseItem) => (
                    <tr key={caseItem.id} className="border-b border-gray-300">
                      <td className="py-3 px-5">{caseItem.patientName}</td>
                      <td className="py-3 px-5 text-blue-600">{caseItem.priorityLevel}</td>
                      <td className="py-3 px-5">{caseItem.status}</td>
                      <td className="py-3 px-5">
                        <button 
                          className="bg-blue-500 text-white rounded-lg w-20 h-10"
                          onClick={() => setEditCase(caseItem)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="py-3 px-5">
                        <button 
                          className="bg-red-600 text-white rounded-lg w-20 h-10"
                          onClick={() => handleDeleteCase(caseItem.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {addCase && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h2 className="text-xl font-semibold mb-4">Add New Case</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const newCase = {
                    // id: newCases.length + 1,
                    // patientName: e.target.patientName.value,
                    // priorityLevel: e.target.priorityLevel.value,
                    // status: e.target.status.value,
                  };
                  handleAddCase(newCase);
                }}
              >
                <div className="mb-4">
                  <label className="block font-semibold">Patient Name</label>
                  <input
                    name="patientName"
                    type="text"
                    className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold">Priority Level</label>
                  <select
                    name="priorityLevel"
                    className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                    required
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block font-semibold">Status</label>
                  <select
                    name="status"
                    className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                    required
                  >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-500 text-white rounded-lg px-4 py-2 mr-2"
                    onClick={() => setAddCase(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-lg px-4 py-2"
                  >
                    Add Case
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {editCase && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h2 className="text-xl font-semibold mb-4">Edit Case</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const updatedCase = {
                    // id: editCase.id,
                    // patientName: e.target.patientName.value,
                    // priorityLevel: e.target.priorityLevel.value,
                    // status: e.target.status.value,
                  };
                  handleUpdateCase(updatedCase);
                }}
              >
                <div className="mb-4">
                  <label className="block font-semibold">Patient Name</label>
                  <input
                    name="patientName"
                    type="text"
                    defaultValue={editCase.patientName}
                    className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold">Priority Level</label>
                  <select
                    name="priorityLevel"
                    defaultValue={editCase.priorityLevel}
                    className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                    required
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block font-semibold">Status</label>
                  <select
                    name="status"
                    defaultValue={editCase.status}
                    className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                    required
                  >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-500 text-white rounded-lg px-4 py-2 mr-2"
                    onClick={() => setEditCase(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-lg px-4 py-2"
                  >
                    Update Case
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseManagement;
