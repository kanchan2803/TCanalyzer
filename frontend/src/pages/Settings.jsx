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

  if (!user) return <div className="p-6">Please log in</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items- center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Profile Settings</h2>

        {/* Display Mode */}
        {!editing ? (
          <div className="space-y-4">
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>LeetCode ID:</strong> {user.leetcodeId || "—"}</div>
            <div><strong>Codeforces ID:</strong> {user.codeforcesId || "—"}</div>

            <button
              onClick={() => setEditing(true)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          // Edit Mode
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                name="email"
                value={form.email}
                disabled
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">LeetCode ID</label>
              <input
                name="leetcodeId"
                value={form.leetcodeId}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Codeforces ID</label>
              <input
                name="codeforcesId"
                value={form.codeforcesId}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            {error && <p className="mt-4 text-center text-red-600">{error}</p>}
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="bg-gray-300 px-4 py-2 rounded"
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
