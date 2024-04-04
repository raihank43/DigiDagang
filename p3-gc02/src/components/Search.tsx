'use client'
import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the search term as you wish
    console.log(`User searched for ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center justify-center mt-10">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-sm px-4 py-2 leading-tight text-gray-700 bg-white border-2 border-blue-500 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-orange-500"
      />
      <button type="submit" className="inline-flex items-center px-3 py-2 ml-4 text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}
