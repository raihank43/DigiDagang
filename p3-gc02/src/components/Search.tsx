"use client";
import { useState } from "react";
import { Product } from "../app/type";

interface SearchBarProps {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ handleSearchChange }: SearchBarProps) {
 

  return (
    <div className="max-w-2xl mx-auto">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-black placeholder:text-white duration-500 ease-in-out bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:placeholder:text-gray-500 rounded-full drop-shadow-xl"
            placeholder="Search Products..."
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none duration-500 ease-in-out focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-blue-600  dark:focus:ring-blue-800 hover:dark:bg-orange-700"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
