"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Register() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="bg-purple flex items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-blue-900">
        <div className="w-full max-w-md space-y-3 rounded-2xl bg-white shadow-lg p-12 transform transition duration-1000 hover:scale-110">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Create Account
          </h2>
          <p className="text-gray-400 text-center">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="text-sm text-blue-700 hover:text-orange-700"
            >
              Sign in
            </Link>
          </p>
          <div className="space-y-4">
            <input
              className="w-full px-4 bg-white py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
              type="text"
              placeholder="Username"
            />
            <div className="relative">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
                type={show ? "password" : "text"}
                placeholder="Password"
              />
              <button
                onClick={() => setShow(!show)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Eye Icon */}
                </svg>
              </button>
            </div>
          </div>
          <button className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
          <p className="text-xs text-center text-black">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>
        </div>
      </div>
    </>
  );
}
