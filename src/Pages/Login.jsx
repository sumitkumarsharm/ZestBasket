import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#4B79A1] to-[#283E51] p-4">
      <div className="bg-white/20 backdrop-blur-md shadow-lg p-6 sm:p-10 rounded-2xl w-full max-w-md border border-white/30">
        <h2 className="text-2xl sm:text-3xl text-center font-bold text-white mb-6">
          Login
        </h2>
        <form action="">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-2 sm:p-3 rounded-lg bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-2 sm:p-3 rounded-lg bg-white/40 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
