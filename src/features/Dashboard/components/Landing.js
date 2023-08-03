import * as React from 'react';

import { useNavigate } from 'react-router';

import { LogoIcon } from '../../../components/Assets/Images/LogoIcon';

import { useUser } from '../../../lib/auth';

export const Landing = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleStart = () => {
    if (user.data) {
      navigate('/');
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <>
      <title>Welcome to Value ERP Plus</title>
      <div className="bg-white h-[100vh] flex items-center">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Value ERP Plus</span>
          </h2>
          <div style={{ width: 200, height: 200 }}>
            <LogoIcon isLight={false} />
          </div>
          <p>Value ERP is The Best Erp Because its serve your Need</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={handleStart}
                src={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                }
              >
                Let&quot;s try Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
