import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import CaseHistory from './pages/CaseHistory';
import AuditTrailPage from './pages/AuditTrailPage';
import StuffManagementPage from './pages/StuffManagementPage';
import ParamedicETA from './pages/ParamedicETA';
import CaseManagement from './pages/CaseManagement';
import Login from './pages/login';
import ForgotPassword from './pages/forgot_Password';
import MedicalAidManagement from './pages/MedicalAidManagement';
import Reports from './pages/Reports';
//import Settings from './pages/Settings'
import App from './App';
import './index.css';

const router = createBrowserRouter([
  {
    //path: '/',
    element: <App />,  // Main layout component for authenticated routes
    children: [
      
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'case-history', element: <CaseHistory /> },
      { path: 'paramedic-map', element: <ParamedicETA /> },
      { path: 'audit-trail', element: <AuditTrailPage /> },  
      { path: 'stuff-management', element: <StuffManagementPage /> },  
      { path: 'case-management', element: <CaseManagement /> },
      { path: 'medical-aid-management', element: <MedicalAidManagement /> },
      { path: 'reports', element: <Reports /> },
      // { path: 'settings', element: <Settings /> },   
      // Add other routes as needed
    ],
  },
  // Comment out the login route to temporarily disable it
  { path: '/', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);