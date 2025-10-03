import React, { useState } from "react";
import { signup, login as loginApi } from "../services/auth.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  //the onchange fnxn : onchange={(e)=> estForm({...form,name:e.target.value})}
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // signup first
      const res = await signup(form);
      setMessage(res.message || "Signup successful!");
      console.log("SIgnup Succesful");

      // then login automatically
      const loginRes = await loginApi({ email: form.email, password: form.password });
      login(loginRes); // ✅ updates AuthContext and localStorage
      console.log("Login succesful!");
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Sign Up
          </button>
        </form>
        {message && (
          <p className="text-center mt-4 text-sm text-gray-400">{message}</p>
        )}
      </div>
    </div>
  );
}
