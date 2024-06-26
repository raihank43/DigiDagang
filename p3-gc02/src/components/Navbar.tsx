"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropDown";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed z-50 w-full bg-white shadow-lg top-0">
      {/* <p>Current pathname: {pathname}</p> */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link
                  href={"/"}
                  className={`text-black px-3 py-2 text-sm font-bold duration-500 ease-in-out hover:border-blue-600 border-b-2 ${
                    pathname == "/"
                      ? "border-orange-700 border-b-3"
                      : "border-white"
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href={"/wishlist"}
                  className={`text-black px-3 py-2 text-sm font-bold duration-500 ease-in-out hover:border-blue-600 border-b-2 ${
                    pathname == "/wishlist"
                      ? "border-orange-700 border-b-3"
                      : "border-white"
                  }`}
                >
                  Wishlist
                </Link>
                <Link
                  href={"/products"}
                  className={`text-black px-3 py-2 text-sm font-bold duration-500 ease-in-out hover:border-blue-600 border-b-2 ${
                    pathname == "/products"
                      ? "border-orange-700 border-b-3"
                      : "border-white"
                  }`}
                >
                  Produk
                </Link>
                <Link
                  href="/about"
                  className={`text-black px-3 py-2 text-sm font-bold duration-500 ease-in-out hover:border-blue-600 border-b-2 ${
                    pathname == "/about"
                      ? "border-orange-700 border-b-3"
                      : "border-white"
                  }`}
                >
                  About
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center">
            {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              /> */}
            <h1 className="ml-8 font-bold">
              <span className=" italic text-2xl font-poppins-black text-indigo-500">
                Digi{" "}
              </span>
              <span className=" font-extrabold font-poppins-bold text-orange-600">
                Dagang
              </span>
            </h1>
          </div>

          <div className=" flex-1 absolute inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            {/* Profile dropdown */}
            <ProfileDropdown />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
