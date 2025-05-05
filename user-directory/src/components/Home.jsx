import React from 'react';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h1 className="text-3xl font-bold text-amber-800 mb-4">Welcome to the User Directory App</h1>
      <p className="text-gray-700 mb-4">
        This user directory allows you to explore profiles of various users. You can navigate to individual user profiles using the links in the navigation bar above. Each profile fetches real-time data from a public API, providing details such as name, username, and email.
      </p>
      <p className="text-gray-700">
        Click on "User 1," "User 2," or "User 3" in the navbar to get started and view their information.
      </p>
    </div>
  );
}