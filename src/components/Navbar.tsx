"use client";

import React from "react";
import Image from "next/image";
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 z-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[65%] bg-black/50 backdrop-blur-sm py-2 rounded-3xl mb-4 flex justify-between items-center">
      <Image
        src="/foxLogo.png"
        width={40}
        height={40}
        alt="logo"
        className="ml-4"
      />
      <a
        href="/"
        className="text-white hover:bg-[#303030] p-4 rounded-full transition duration-300"
      >
        <FaHome className="text-xl" />
      </a>

      <a
        href="/projects"
        className="text-white hover:bg-[#303030] p-4 rounded-full transition duration-300"
      >
        <FaProjectDiagram className="text-xl" />
      </a>
      <a
        href="mailto:lioarce1@email.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:bg-[#303030]p-4 rounded-full transition duration-300 mr-4"
      >
        <FaEnvelope className="text-xl" />
      </a>
    </nav>
  );
};

export default Navbar;
