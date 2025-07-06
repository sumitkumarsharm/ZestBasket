import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Register = () => {
  const nevigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    const existingUsers =
      JSON.parse(localStorage.getItem("aonestoreUsers")) || [];

    const updatedUsers = [...existingUsers, data];

    const emailExists = existingUsers.find((user) => user.email === data.email);
    if (emailExists) {
      toast.error("Email already registered!");
      reset();
      return;
    }

    localStorage.setItem("aonestoreUsers", JSON.stringify(updatedUsers));

    reset();
    toast.success("Registration successful!");

    setTimeout(() => {
      nevigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[rgb(32,32,33)] to-[rgb(40,40,41)]">
      <div className="bg-white/40 backdrop-blur-md shadow-lg p-6 sm:p-10 rounded-2xl w-full max-w-md border border-white/30">
        <h2 className="text-2xl sm:text-3xl text-center font-bold text-white mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white font-semibold mb-1"
            >
              Username
            </label>
            <input
              {...register("username", { required: "Username is required..." })}
              type="text"
              id="username"
              placeholder="John Doe"
              className="w-full p-2 sm:p-3 rounded-lg bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.username && (
              <p className="text-red-800">{errors.username.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-1"
            >
              Email
            </label>
            <input
              {...register("email", { required: "Email is required..." })}
              type="email"
              id="email"
              placeholder="john@example.com"
              className="w-full p-2 sm:p-3 rounded-lg bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && (
              <p className="text-red-800">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white font-semibold mb-1"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required...",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-2 sm:p-3 rounded-lg bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.password && (
              <p className="text-red-800">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmpassword"
              className="block text-white font-semibold mb-1"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmpassword", {
                required: "Please confirm your password...",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              id="confirmpassword"
              placeholder="••••••••"
              className="w-full p-2 sm:p-3 rounded-lg bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.confirmpassword && (
              <p className="text-red-800">{errors.confirmpassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 rounded-lg transition duration-300"
            // if the form is field, then  render to the login form
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-white">
          Already have an account?
          <NavLink
            to="/"
            className="underline text-orange-300 hover:text-orange-200"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
