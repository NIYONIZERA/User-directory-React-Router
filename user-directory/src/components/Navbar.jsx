import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-amber-800 p-4 shadow-md">
      <div className=" mx-auto flex space-x-6">
        <Link to="/" className="text-white hover:text-amber-300 font-semibold transition">Home</Link>
        <Link to="/users/1" className="text-white hover:text-amber-300 font-semibold transition">User 1</Link>
        <Link to="/users/2" className="text-white hover:text-amber-300 font-semibold transition">User 2</Link>
        <Link to="/users/3" className="text-white hover:text-amber-300 font-semibold transition">User 3</Link>
      </div>
    </nav>
  );
}