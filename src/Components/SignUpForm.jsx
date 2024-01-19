import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import FormInput from "./FormInput";
import SignSideBar from "../layouts/SignSideBar";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      console.log("Form Values:", formData);
      navigate("/signin");
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.username.trim()) {
      errors.username = "Username is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
    };
    
     const handleSignUpClick = () => {
       // Navigate to the Sign Up page
       navigate("/SignInForm");
     };

  return (
    <div className="grid lg:grid-cols-2 bg-gray-900 h-screen">
     <div className="hidden lg:block"> 
     <SignSideBar  /> 
     </div>
      <div className="lg:col-span-1 mt-8 self-center">
        <div className="p-10 max-w-lg">
          <h2 className="text-2xl font-semibold mb-4 text-slate-200">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Username"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              error={errors.username}
            />

            <FormInput
              label="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <FormInput
              label="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
            />

            <FormInput
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={errors.confirmPassword}
            />

            <Button text="Sign Up" onClick={handleSubmit} variant="success" />
          </form>
          
           <div className="mt-4 text-slate-300">
            <p>
              Already have an account? &nbsp;
              <span
                className="text-orange-400 cursor-pointer"
                onClick={handleSignUpClick}
              >
                Sign In
              </span>
                      </p>
                      </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
