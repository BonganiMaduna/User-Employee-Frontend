import React from 'react';

const AuditTrailPage: React.FC = () => {
  return (
  <div className="flex-1 flex flex-col">
    <div className="flex-1 p-6 bg-gray-100 flex space-x-6">
      
      {/* Logs Overview Section */}
      <div className="p-6 bg-gray-200 flex-1 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">Audit Trails and Security</h2>  
        <h3 className="text-2xl font-semibold mb-4">Logs Overview</h3>
        
        <div className="flex space-x-4 mb-6">
          <div className="bg-white p-4 rounded shadow-md text-center w-1/3">
            <p className="text-2xl font-bold">1,254</p>
            <p>Today</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md text-center w-1/3">
            <p className="text-2xl font-bold">8,430</p>
            <p>Week</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md text-center w-1/3">
            <p className="text-2xl font-bold">33,240</p>
            <p>Month</p>
          </div>
        </div>
        
        <table className="w-full bg-white rounded shadow-lg mb-6">
          <thead>
            <tr className="text-left">
              <th className="p-4 border-b">Username</th>
              <th className="p-4 border-b">Date & Time</th>
              <th className="p-4 border-b">Action Performed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b">john.d@e.com</td>
              <td className="p-4 border-b">2024-10-21 09:00 AM</td>
              <td className="p-4 border-b">Accessed Patient File #123</td>
            </tr>
            <tr>
              <td className="p-4 border-b">john.d@e.com</td>
              <td className="p-4 border-b">2024-10-21 09:00 AM</td>
              <td className="p-4 border-b">Accessed Patient File #123</td>
            </tr>
            <tr>
              <td className="p-4 border-b">admin@e.com</td>
              <td className="p-4 border-b">2024-10-21 09:00 AM</td>
              <td className="p-4 border-b">Deleted Patient File #123</td>
            </tr>
          </tbody>
        </table>
        
        {/* Statistics Panel */}
        <div className="p-4 bg-white shadow-md rounded-lg w-80 ml-auto">
          <h3 className="text-3xl font-bold mb-4 text-center">Statistics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-bold">Total Logs</p>
              <p >45,234</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Total Errors</p>
              <p >321</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Most Active User</p>
              <p >admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
);

};

export default AuditTrailPage;
