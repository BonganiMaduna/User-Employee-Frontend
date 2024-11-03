import React from 'react'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

const ForgotPassword: React.FC = () => {
    return (
        <div 
        className='flex items-center justify-center min-h-screen' 
        style={{ backgroundColor: '#111827' }} 
        >
        <div className='max-w-md w-full' style={{ 
            borderRadius: '50px', 
            background: 'rgba(196, 208, 217, 0.8)', 
            boxShadow: '20px 20px 60px #a7b1b8, -20px -20px 60px #e1effa' 
        }}>
            
            <div className='p-8'>
            <div className='w-16 h-16' style={{ backgroundColor: '#0401A0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginBottom: '1rem' }}>
                <Mail className='h-8 w-8 text-white' />
            </div>
            <h2 className='text-3xl font-bold mb-6 text-center'
                style={{ 
                    background: 'linear-gradient(to right, #0f3ca3, #071840)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent' 
                }}>
                Forgot Password
            </h2>
            <form className='mb-4'>
                <label className='block text-gray-700 mb-1' htmlFor='email'>
                Email Address
                </label>
                <input
                type='email'
                id='email'
                placeholder='Email Address'
                className='w-full p-2 rounded border border-gray-500 bg-gray-200 text-gray-700'
                value='Enter Email Address'
                readOnly
                />
                <button
                    type='submit'
                    className='mt-4 w-full py-3 px-4 bg-gradient-to-r from-[#0f3ca3] to-[#071840] text-white font-bold rounded-lg shadow-lg hover:from-[#071840] hover:to-[#0f3ca3] focus:outline-none transition duration-200'
                    >
                    Send Reset Link
                </button>
            </form>
            <div className='px-8 py-4 flex justify-center'>
                <Link to='/' className='flex items-center text-sm' style={{ color: '#0401A0'}}>
                <ArrowLeft className='h-4 w-4 mr-2' /> Back to Login
                </Link>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ForgotPassword;