'use client';

import { useState } from 'react';
import { useAdminAuth } from '@/hooks/use-admin-auth';

export default function AdminLoginForm() {
  const { login, isLoggingIn, loginError } = useAdminAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    login(formData);
  };

  return (
    <div>
      <div className="w-82 space-y-8">
        <div className="mt-8 space-y-6 p-8 rounded-lg flex-1">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 bg-gray-300 placeholder-gray-400 text-white focus:outline-none focus:ring-accent/50 focus:border-accent/50 focus:z-10 sm:text-sm"
                placeholder="Enter email"
                disabled={isLoggingIn}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 bg-gray-300 placeholder-gray-400 text-white focus:outline-none focus:ring-accent/50 focus:border-accent/50 focus:z-10 sm:text-sm"
                placeholder="••••••••"
                disabled={isLoggingIn}
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              disabled={isLoggingIn}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/50 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              {isLoggingIn ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}