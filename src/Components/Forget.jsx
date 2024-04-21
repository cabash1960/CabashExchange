import React, { useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";

const ForgotPasswordForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      handleClose();
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  return (
    <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-gray-600 p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-slate-300">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            id="forgotEmail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Button text="Submit" variant="success" />
        </form>
        <div className="mt-4">
          <p className="text-orange-400 cursor-pointer" onClick={handleClose}>
            Close
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
