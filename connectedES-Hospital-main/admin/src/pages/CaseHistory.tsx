import React, { useState } from 'react';
import Filter from '../../public/assets/filter.png';

interface Case {
    patientName: string;
    caseNumber: string;
    status: string;
    dateCreated: string;
}

const cases: Case[] = [
    { patientName: 'John Doe', caseNumber: 'C001', status: 'Completed', dateCreated: '2023-01-15' },
    { patientName: 'Jane Smith', caseNumber: 'C002', status: 'Cancelled', dateCreated: '2023-02-20' },
    { patientName: 'Michael Johnson', caseNumber: 'C003', status: 'Completed', dateCreated: '2023-03-10' },
    { patientName: 'Emily Brown', caseNumber: 'C004', status: 'Completed', dateCreated: '2023-04-05' },
    { patientName: 'David Wilson', caseNumber: 'C005', status: 'Cancelled', dateCreated: '2023-05-12' },
    { patientName: 'Sarah White', caseNumber: 'C006', status: 'Completed', dateCreated: '2023-06-18' },
    { patientName: 'Kevin Lee', caseNumber: 'C007', status: 'Cancelled', dateCreated: '2023-07-25' },
];

const CaseHistory: React.FC = () => {
    const [selectedCase, setSelectedCase] = useState<Case | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleViewDetails = (caseItem: Case) => {
        setSelectedCase(caseItem);
    };

    const closeModal = () => {
        setSelectedCase(null);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredCases = cases.filter((caseItem) =>
        caseItem.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Case History</h1>
            <div className="flex items-center space-x-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by Patient Name or Status"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-2 border border-gray-300 rounded-md flex-grow"
                />
                <button
                    className="flex p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    <img src={Filter} alt="Logo" className="w-5 h-5 mr-2 invert" />
                    Filter
                </button>
            </div>
            <table className="bg-white w-full border border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3 text-left">Patient Name</th>
                        <th className="p-3 text-left">Case Number</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Date Created</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCases.map((caseItem, index) => (
                        <tr key={index} 
                            className={`hover:bg-gray-50 ${
                                caseItem.status === 'Cancelled' ? 'bg-red-100' : 'bg-blue-100'
                            }`}
                        >
                            <td className="p-3">{caseItem.patientName}</td>
                            <td className="p-3">{caseItem.caseNumber}</td>
                            <td
                                className={`p-3 font-semibold ${
                                    caseItem.status === 'Cancelled' ? 'text-red-600' : 'text-blue-600'
                                }`}
                            >
                                {caseItem.status}
                            </td>
                            <td className="p-3">{caseItem.dateCreated}</td>
                            <td className="p-3">
                                <button
                                    onClick={() => handleViewDetails(caseItem)}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                >
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {selectedCase && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Case Details</h2>
                        <p><strong>Patient Name:</strong> {selectedCase.patientName}</p>
                        <p><strong>Case Number:</strong> {selectedCase.caseNumber}</p>
                        <p><strong>Status:</strong> {selectedCase.status}</p>
                        <p><strong>Date Created:</strong> {selectedCase.dateCreated}</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaseHistory;
