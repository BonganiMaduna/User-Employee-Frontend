import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
