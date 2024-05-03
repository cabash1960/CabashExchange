import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import FormInput from "./FormInput";
import SignSideBar from "../layouts/SignSideBar";
import axios from "axios";

const SignInForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [signInError, setSignInError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await signIn(formData);
        console.log("Sign-in response:", response);
        if (response.success) {
          console.log("Sign-in successful, navigating to dashboard");
          navigate("/Dashboard");
        } else {
          console.log("Sign-in unsuccessful, displaying error message");
          if (response.error === "invalid_credentials") {
            setSignInError("Invalid email or password");
          } else {
            console.error(response.error);
            setSignInError("An error occurred during sign-in");
          }
        }
      } catch (error) {
        console.error("Error signing in:", error);
        setSignInError("An error occurred during sign-in");
      }
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

  const signIn = async (data) => {
    try {
      const response = await axios.post(
        "https://mimi-ihak.onrender.com/api/v1/accounts/sign-in",
        {
          email: data.email,
          password: data.password,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };

  return (
    <div className="grid lg:grid-cols-2 bg-gray-900 h-screen">
      <div className="hidden lg:block">
        <SignSideBar />
      </div>
      <div className="lg:col-span-1 mt-8 self-center">
        <div className="p-10 max-w-lg">
          <h2 className="text-2xl font-semibold mb-4 text-slate-200">
            Sign In
          </h2>
          {signInError && <p className="text-red-500 mb-4">{signInError}</p>}{" "}
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
            <Button text="Sign In" type="submit" variant="success" />{" "}
            {/* Ensure type="submit" to trigger form submission */}
          </form>
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
