import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import logo from '../../assets/logo.svg'

export default function Navbar() {
     
    const { user, isLoggedIn, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleLogout = () => {
      logout();
      setMenuOpen(false);
      navigate("/login");
    }

    const linkClasses = ({ isActive }) =>
    "hover:text-purple-400 transition-colors duration-300 " + (isActive ? "text-purple-500 font-bold" : "");


    return (
        <nav className="bg-gray-800 text-white px-8 py-4 flex justify-between items-center shadow-lg">

            <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} className="h-8 w-8" alt="TCAnalyzer logo" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          TCAnalyzer
        </span>
            </NavLink>

            <ul className='flex gap-6 items-center'>
                <li><NavLink to="/" end className={linkClasses}>Home</NavLink></li>
                <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
                <li><NavLink to="/history" className={linkClasses}>History</NavLink></li>
            </ul>

            <div className="relative">
                <button
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold transform hover:scale-110 transition-transform duration-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {isLoggedIn ? user.name.charAt(0).toUpperCase() : "?"} {/* Initial for logged user, ? if guest */}

                </button>

                {/* Dropdown menu */}
                <div 
                    className={`absolute right-0 mt-2 w-56 bg-gray-800 text-white rounded-lg shadow-2xl border border-gray-700 p-4 z-10 transition-all duration-200 ease-out transform origin-top-right ${menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
                >
              {!isLoggedIn ? (
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/login"
                  className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="px-3 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 text-center transition-opacity"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </div>
            ):(
            <div className="flex flex-col gap-2">
              <div className="px-3 py-2 border-b border-gray-700 mb-2">
                <p className="font-semibold">Hello, {user.name}</p>
                <p className="text-sm text-gray-400">LeetCode: {user.leetcodeId}</p>
                <p className="text-sm text-gray-400">CodeChef: {user.codeforcesId}</p>
              </div>
                <NavLink
                  to="/settings"
                  className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  Settings
                </NavLink>
                <button
                  className="px-3 py-2 rounded bg-red-600 text-white hover:bg-red-500 text-left transition-colors"
                  onClick={ handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
            </div>
            </div>
        </nav>
    )
}
