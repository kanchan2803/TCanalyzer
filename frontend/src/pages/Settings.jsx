// src/pages/Settings.jsx
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { updateUserApi } from "../services/api";

export default function Settings() {
  const { user, updateUser } = useContext(AuthContext);
  const [form, setForm] = useState({ 
    name: user?.name || "",
    email: user?.email || "", 
    leetcodeId: user?.leetcodeId || "", 
    codeforcesId: user?.codeforcesId || "" 
  });
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
    try {
      const updated = await updateUserApi(user._id, form);
      updateUser(updated);
      setEditing(false);
      alert("Profile updated!");
    } catch (err) {
      console.log("update error:",err);
      alert("Update failed");
    }
  };

  if (!user) return <div className="p-6">Please log in</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

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
