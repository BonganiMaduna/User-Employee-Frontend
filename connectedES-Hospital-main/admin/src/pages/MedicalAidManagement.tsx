import React, { useState } from 'react';

const MedicalAidManagement = () => {
  const [medicalAid, setMedicalAid] = useState([
    { id: 1, patientName: "Gift Mamarara", clinic: "City Clinic", medicalNumber: "M327TMI8", validUntil: "2024-10-12" },
    { id: 2, patientName: "Klass", clinic: "City Clinic", medicalNumber: "M32700I8", validUntil: "2024-10-12" },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMedicalAid, setCurrentMedicalAid] = useState(null);

  const handleUpdateClick = (medicalItem) => {
    setCurrentMedicalAid(medicalItem);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setCurrentMedicalAid({ ...currentMedicalAid, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMedicalAid = medicalAid.map((item) =>
      item.id === currentMedicalAid.id ? currentMedicalAid : item
    );
    setMedicalAid(updatedMedicalAid);
    setIsEditing(false);
    setCurrentMedicalAid(null);
  };

  return (
    <div className="flex">
      <div className="flex-grow bg-gray-200 p-6 justify-center">
        <h1 className="text-center text-4xl font-semibold mt-5">Medical Aid Validation</h1>

        {/* Summary Cards */}
        <div className="flex items-center mb-6 mt-8">
          <div className="bg-white w-96 h-28 mr-5 border border-black rounded-lg flex-grow">
            <div className="mx-4 mt-5 mr-4">
              <h6 className="text-gray-600">Total Members</h6>
              <h2 className="mt-3 font-semibold font-bold text-4xl">1200</h2>
            </div>
          </div>

          <div className="bg-white w-96 h-28 mr-5 border border-black rounded-lg flex-grow">
            <div className="mx-4 mt-5 mr-4">
              <h6 className="text-gray-600">Linked Members</h6>
              <h2 className="mt-3 font-semibold font-bold text-4xl">850</h2>
            </div>
          </div>

          <div className="bg-white w-96 h-28 mr-5 border border-black rounded-lg flex-grow">
            <div className="mx-4 mt-5 mr-4">
              <h6 className="text-gray-600">New Linked Members</h6>
              <h2 className="mt-3 font-semibold font-bold text-4xl">150</h2>
            </div>
          </div>
        </div>

        {/* Conditional Rendering: Table or Update Form */}
        {isEditing ? (
          <div className="mt-5 bg-white p-5 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Update Medical Aid</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Patient Name:</label>
                <input
                  type="text"
                  name="patientName"
                  value={currentMedicalAid.patientName}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Clinic:</label>
                <input
                  type="text"
                  name="clinic"
                  value={currentMedicalAid.clinic}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Medical Number:</label>
                <input
                  type="text"
                  name="medicalNumber"
                  value={currentMedicalAid.medicalNumber}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Valid Until:</label>
                <input
                  type="date"
                  name="validUntil"
                  value={currentMedicalAid.validUntil}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white rounded-lg px-4 py-2"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white rounded-lg px-4 py-2 ml-2"
              >
                Cancel
              </button>
            </form>
          </div>
        ) : (
          <div className="border border-gray-400 rounded-lg h-[480px] overflow-hidden mx-1">
            <div className="overflow-y-auto max-h-[500px]">
              <table className="min-w-full border-collapse">
                <thead className="bg-white">
                  <tr>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Patient Name</th>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Clinic</th>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Medical Number</th>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Valid until</th>
                    <th className="py-3 px-5 text-left font-semibold border-b border-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {medicalAid.map((medicalItem) => (
                    <tr key={medicalItem.id} className="border-b border-gray-300">
                      <td className="py-3 px-5">{medicalItem.patientName}</td>
                      <td className="py-3 px-5">{medicalItem.clinic}</td>
                      <td className="py-3 px-5">{medicalItem.medicalNumber}</td>
                      <td className="py-3 px-5">{medicalItem.validUntil}</td>
                      <td className="py-3 px-5">
                        <button
                          onClick={() => handleUpdateClick(medicalItem)}
                          className="bg-blue-700 text-white rounded-lg w-20 h-10 mr-5"
                        >
                          Update
                        </button>
                        <button className="bg-red-600 text-white rounded-lg w-20 h-10">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalAidManagement;
