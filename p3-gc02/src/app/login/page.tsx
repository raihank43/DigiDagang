import React from 'react'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-r animate-gradient-x from-purple-400 via-pink-500 to-red-500 bg-opacity-25 backdrop-blur-md flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full flex">
        <div className="w-1/2 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white">Welcome to E-Shop</h2>
            <p className="mt-2 text-lg text-white">Silahkan login</p>
          </div>
        </div>
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg space-y-8">
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
