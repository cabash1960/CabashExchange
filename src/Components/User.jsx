import React, { useState } from "react";

const User = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phoneNumber: "",
    email: "",
    gender: "",
    dob: "",
    activateEmailOTP: false,
    country: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-[70%] p-8">
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            name="activateEmailOTP"
            checked={formData.activateEmailOTP}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Activate Email OTP</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="block w-full bg-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default User;
