import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import FormInput from "./FormInput";
import SignSideBar from "../layouts/SignSideBar";

const SignInForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      // Call the sign-in API
      fetch("https://mimi-ihak.onrender.com/api/v1/accounts/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Sign in failed");
          }
          return response.json();
        })
        .then((data) => {
          // Sign in successful, navigate to dashboard
          navigate("/dashboard");
        })
        .catch((error) => {
          // Handle sign-in errors, such as incorrect credentials
          console.error("Sign in error:", error);
          setErrors({
            general: "Sign in failed. Please check your credentials.",
          });
        });
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className="grid lg:grid-cols-2 bg-gray-900 h-screen">
      <div className="hidden lg:block ">
        <SignSideBar />
      </div>
      <div className="lg:col-span-1 mt-8 self-center ">
        <div className="p-10 max-w-lg">
          <h2 className="text-2xl font-semibold mb-4 text-slate-200">
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
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
            <Button text="Sign In" onClick={handleSubmit} variant="success" />
          </form>
          {errors.general && <p className="text-red-500">{errors.general}</p>}
          <div className="mt-4">
            <p className="text-slate-300">
              Don't have an account? &nbsp;
              <span className="text-orange-400 cursor-pointer">
                <Link to="/SignUpForm">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
