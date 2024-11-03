import { Link, useNavigate } from 'react-router-dom';
import image from '../../public/assets/Logo.jpeg'
import React from 'react';

const Login: React.FC = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    //logic here to verify login credentials if needed
    navigate('/dashboard'); 
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-60"></div>
      <div className="bg-black bg-opacity-50 flex rounded-lg shadow-lg overflow-hidden w-3/4 max-w-4xl">
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">LOGIN</h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="email"
                className="w-full p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@gmail.com"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="............."
                required
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link to="/forgot-password" className="text-sm text-blue-400 hover:underline">
                Forgot
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-800">
          <div className="mb-4 text-white text-3xl font-bold">Connected Es</div>
          <img src={image} alt="Connected Es Logo" className="mb-8 h-48 w-52" />
        </div>
      </div>
    </div>
  );
};

export default Login;