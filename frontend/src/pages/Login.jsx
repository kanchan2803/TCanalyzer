import React, { useState } from "react";
import { login as loginApi } from "../../src/services/auth.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("request form:",form);
      const res = await loginApi(form); // your backend API
      console.log("login response in client:", res);
      
      login(res); // ✅ updates context + localStorage

      setMessage("Login successful!");
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Login
          </button>
        </form>
        {message && (
          <p className="text-center mt-4 text-sm text-gray-400">{message}</p>
        )}
      </div>
    </div>
  );
}
