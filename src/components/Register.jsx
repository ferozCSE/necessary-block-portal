import React from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://your-wp-site.com/wp-json/wp/v2/users",
        {
          username: data.email,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            Authorization: "Basic " + btoa("admin@gmail.com:admin@admin"),
            "Content-Type": "application/json",
          },
        }
      );

      alert(`Registration successful for ${response.data.email}`);
      // Optionally redirect to login page
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:from-blue-700 hover:to-purple-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-500">Or sign up with</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <SocialButton
              icon={<FaGoogle />}
              color="bg-red-500"
              label="Google"
            />
            <SocialButton
              icon={<FaGithub />}
              color="bg-gray-800"
              label="GitHub"
            />
            <SocialButton
              icon={<FaFacebook />}
              color="bg-blue-600"
              label="Facebook"
            />
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, label, color }) => (
  <button
    className={`flex items-center justify-center w-full py-2 space-x-2 text-white rounded-md ${color} hover:opacity-90 transition`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Register;
