import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const nevigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("aonestoreUsers")) || [];
    const matchedUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (matchedUser) {
      toast.success("Login successful!");

      localStorage.setItem("aonestoreCurrentUser", JSON.stringify(matchedUser));

      nevigate("/home");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#4B79A1] to-[#283E51] p-4">
      <div className="bg-white/20 backdrop-blur-md shadow-lg p-6 sm:p-10 rounded-2xl w-full max-w-md border border-white/30">
        <h2 className="text-2xl sm:text-3xl text-center font-bold text-white mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-1"
              // s
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-2 sm:p-3 rounded-lg bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white font-semibold mb-1"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-2 sm:p-3 rounded-lg bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className={"underline text-orange-800 hover:text-orange-200"}
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;

// Surtmsi hsfiosnsf Sumit sharma
