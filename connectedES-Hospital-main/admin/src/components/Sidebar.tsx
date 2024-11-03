import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/assets/Logo.jpeg';
import Person from '../../public/assets/person.png';
import logout from '../../public/assets/logout.png';
import settings from '../../public/assets/settings.png';

const Sidebar: React.FC = () => {

    return (
        <div className="bg-blue-950 text-white w-64 h-full flex flex-col p-6">
            {/* Logo and User Info */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col items-center space-x-2">
                    <img src={Logo} alt="Logo" className="w-20 h-20 rounded-full" />
                    <div className="text-3xl font-bold">Connected ES</div>
                </div>
            </div>
            <div className="flex items-center space-x-2 mb-4">
                <img src={Person} alt="User" className="bg-white w-10 h-10 rounded-full mr-2" />
                <div>
                    <h2 className="text-lg font-semibold">Mpho</h2>
                    <p className="text-xs">Admin</p>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col flex-grow overflow-y-auto scrollbar-hidden">
                {[
                    { name: 'Dashboard', path: '/dashboard' },
                    { name: 'Cases Management', path: '/case-management' },
                    { name: 'Audit Trails and Security', path: '/audit-trail' },
                    { name: 'Medical Aid Management', path: '/medical-aid-management' },
                    { name: 'Staff Management', path: '/stuff-management' },
                    { name: 'Case History', path: '/case-history' },
                    { name: 'Reports', path: '/reports' },
                    { name: 'Settings', path: '/settings' },
                    { name: 'Paramedic ETA & Map', path: '/paramedic-map' }
                ].map((item, index) => (
                    <Link 
                        key={index} 
                        to={item.path} 
                        className="text-left text-lg px-4 py-2 rounded hover:bg-blue-700 border-b border-blue-700 last:border-b-0"
                    >
                        {item.name}
                    </Link>
                ))}              
            </nav>

            {/* Settings and Logout */}
            <div className="mt-auto flex flex-col space-y-2">
                <Link to="/settings" className="flex items-center px-4 py-2 hover:bg-blue-700">
                    <img src={settings} alt="Settings" className="w-8 h-8 mt-1 ml-2 mr-5" />
                    Settings
                </Link>
                <Link to="/logout" className="flex items-center px-4 py-2 hover:bg-blue-700">
                    <img src={logout} alt="Logout" className="w-8 h-8 mt-1 ml-1 mr-5" />
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
