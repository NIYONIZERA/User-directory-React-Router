import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-amber-800 mb-4">User Profile:</h2>
      <p className="text-gray-700"><strong>Name:</strong> {user.name}</p>
      <p className="text-gray-700"><strong>Username:</strong> {user.username}</p>
      <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
    </div>
  );
}