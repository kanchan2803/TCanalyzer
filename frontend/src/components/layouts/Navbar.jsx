import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function Navbar() {
     
    const { user, isLoggedIn, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleLogout = () => {
      logout();
      navigate("/login");
    }

    const linkClasses = ({ isActive }) =>
    "hover:text-blue-400 " + (isActive ? "text-blue-500 font-bold" : "");


    return (
        <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">

            <NavLink to="/" className="text2xl font-bold">
              TCAnalyzer
            </NavLink>

            <ul className='flex gap-6'>
                <li><NavLink to="/" end className={linkClasses}>Home</NavLink></li>
                <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
                <li><NavLink to="/history" className={linkClasses}>History</NavLink></li>
            </ul>

            <div className="relative">
                <button
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {isLoggedIn ? "U" : "?"} {/* Initial for logged user, ? if guest */}

                </button>

                {/* Dropdown menu */}
                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg p-4 z-10">
                        {!isLoggedIn ? (
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/login"
                  className="px-3 py-2 rounded hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </div>
            ):(
            <div className="flex flex-col gap-2">
                <p className="font-semibold">Hello, {user.name}</p>
                <p className="text-sm text-gray-600">LeetCode: {user.leetcodeId}</p>
                <p className="text-sm text-gray-600">CodeChef: {user.codeforcesId}</p>
                <NavLink
                  to="/settings"
                  className="px-3 py-2 rounded hover:bg-gray-100"
                >
                  Settings
                </NavLink>
                <button
                  className="px-3 py-2 rounded bg-red-600 text-white hover:bg-red-500"
                  onClick={ handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
            </div>
                )}
            </div>
        </nav>
    )
}
