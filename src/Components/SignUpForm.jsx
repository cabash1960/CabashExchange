import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import FormInput from "./FormInput";
import SignSideBar from "../layouts/SignSideBar";
import axios from "axios";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    username: "",
  });
  // console.log(JSON.stringify(formData));

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SignUP = async (credentials) => {
    try {
      const response = await axios.post(
        "https://mimi-ihak.onrender.com/api/v1/accounts/registration/",
        credentials
      );
      const getData = response.data;
      console.log(">>>> " + JSON.stringify(getData));

      // return getData.message;
    } catch (error) {
      console.log("Error " + JSON.stringify(error));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Values:", formData);
      navigate("/SignInForm");
    }

    var result = SignUP(formData);
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.first_name.trim()) {
      errors.first_name = "firstname is required";
    }

    if (!data.last_name.trim()) {
      errors.last_name = "lastname is required";
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

    if (!data.username.trim()) {
      errors.username = "Username is required";
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
        <SignSideBar />
      </div>
      <div className="lg:col-span-1 mt-8 self-center">
        <div className="p-10 max-w-lg">
          <h2 className="text-2xl font-semibold mb-4 text-slate-200">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="FirstName"
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              error={errors.first_name}
            />

            <FormInput
              label="LastName"
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              error={errors.last_name}
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
              label="Username"
              type="name"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              error={errors.username}
            />

            <Button text="Sign Up" onClick={handleSubmit} variant="success" />
          </form>

          <div className="mt-4 text-slate-300">
            <p>
              Already have an account? &nbsp;
              <span className="text-orange-400 cursor-pointer" onClick={handleSignUpClick}>
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
