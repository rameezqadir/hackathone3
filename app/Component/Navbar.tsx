"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-xl font-bold">Ramz Rental</div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <span className="text-2xl">&#x2715;</span> // Close icon
            ) : (
              <span className="text-2xl">&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:flex-row lg:items-center lg:space-x-10 space-y-4 lg:space-y-0 lg:static absolute top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent`}
        >
          <li className="px-4 hover:cursor-pointer hover:text-gray-400">
            Home
          </li>
          <Link href="../../Component/CarData"><li className="px-4 hover:cursor-pointer hover:text-gray-400">
            Cars
          </li></Link>
          <li className="px-4 hover:cursor-pointer hover:text-gray-400">
            About us
          </li>
          <li className="px-4 hover:cursor-pointer hover:text-gray-400">
            Sign up / Log In
          </li>
        </ul>
      </div>
    
    </nav>
  );
}