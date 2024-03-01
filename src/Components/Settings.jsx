import React, { useState } from "react";

const Settings = () => {
  const [language, setLanguage] = useState("English");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [timeFormat, setTimeFormat] = useState("12-hour");

  const handleSave = () => {
    // Logic to save settings goes here
    console.log("Settings saved:", { language, timeFormat });
  };

  const handleChangePassword = () => {
    // Logic to change password goes here
    console.log("Password changed:", {
      oldPassword,
      newPassword,
      confirmPassword,
    });
  };

  return (
    <div className="lg:max-w-[70%] p-8">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Change Password</label>
          <input
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            placeholder="Old Password"
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">New Password</label>
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="New Password"
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm New Password"
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Time Format</label>
          <select
            value={timeFormat}
            onChange={(e) => setTimeFormat(e.target.value)}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="12-hour">12-hour</option>
            <option value="24-hour">24-hour</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save
          </button>
          <button
            onClick={handleChangePassword}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
