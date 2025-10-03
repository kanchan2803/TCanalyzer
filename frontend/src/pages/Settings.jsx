// src/pages/Settings.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { updateUserApi } from "../services/api";

export default function Settings() {
  const { user, updateUser } = useAuth();

  const [form, setForm] = useState({ 
    name: user?.name || "",
    email: user?.email || "", 
    leetcodeId: user?.leetcodeId || "", 
    codeforcesId: user?.codeforcesId || "" 
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        leetcodeId: user.leetcodeId || "",
        codeforcesId: user.codeforcesId || "",
      });
    }
  }, [user]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    setError("");
    setMessage("");
    try {
      const updated = await updateUserApi(form);
      updateUser(updated);
      setEditing(false);
      setMessage('Profile updated successfully!');
    } catch (err) {
      console.log("update error:",err);
      setError('Failed to update profile. Please try again.');
    }
  };

  if (!user) return <div className="p-6 bg-gray-900 text-white">Please log in</div>;

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-lg bg-gray-800 shadow-xl rounded-2xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">Profile Settings</h2>

        {/* Display Mode */}
        {!editing ? (
          <div className="space-y-4 text-white">
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>LeetCode ID:</strong> {user.leetcodeId || "—"}</div>
            <div><strong>Codeforces ID:</strong> {user.codeforcesId || "—"}</div>

            <button
              onClick={() => setEditing(true)}
              className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          // Edit Mode
          <div className="space-y-4 text-white">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                name="email"
                value={form.email}
                disabled
                className="w-full border px-3 py-2 rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">LeetCode ID</label>
              <input
                name="leetcodeId"
                value={form.leetcodeId}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Codeforces ID</label>
              <input
                name="codeforcesId"
                value={form.codeforcesId}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {message && <p className="mt-4 text-center text-green-400">{message}</p>}
            {error && <p className="mt-4 text-center text-red-600">{error}</p>}
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
