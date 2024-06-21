import React, { useState } from 'react';
import '../button.css'
import { useNavigate } from 'react-router-dom';
function UserLogin() {

  const navigate = useNavigate()
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (name.trim() !== '') {
      localStorage.setItem("Anniyan-username",name)
      navigate('/chat');
    } else {
      alert('Please try again');
    }
  };
  return (
      <div className="min-h-screen flex items-stretch text-white">
        <div 
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)' }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
            <p className="text-3xl my-4">Capture your personal memory in a unique way, anywhere.</p>
          </div>
          <div className="absolute bottom-0 p-4 text-center right-0 left-0 flex justify-center space-x-4">
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{ backgroundColor: '#161616' }}>
          <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)' }}>
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20 flex flex-col items-center">
            <h1 className="my-6 text-4xl font-semibold">Welcome to Anniyan </h1>
            <div className="w-1/2 pb-2 pt-4">
              <form onSubmit={handleSubmit} className="w-full max-w-xs">
                <input 
                  type="name" 
                  name="name" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Username" 
                  autoComplete='off'
                  className="block w-full p-4 text-lg rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm" 
                />
                <div className="w-full px-4 pb-2 pt-4">
                  <button type="submit" className="big-button">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default UserLogin;
