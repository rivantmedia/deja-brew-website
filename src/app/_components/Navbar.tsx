"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const blurEffect = "backdrop-blur-[2px]";
  const bgColor = "bg-opacity-50 bg-[var(--nav-background)]";

  return (
    <nav className="fixed w-full top-0 left-0 z-50" tabIndex={0} onBlur={() => setIsOpen(false)}>
      <div className={`flex items-center justify-between ${blurEffect} ${bgColor} px-4 py-2 h-[90px] sm:h-[100px] md:h-[120px]`}>
        <Link href="/" className="flex-shrink-0 relative left-2 md:left-5">
          <div className="w-[75px] h-[75px] sm:w-[15px] sm:h-[15px] md:w-[91px] md:h-[91px] relative">
            <Image
              src="/Desktop/logo.png"
              fill
              alt="Logo"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-5 items-center pr-4 md:pr-6 lg:pr-6">
          <li><NavLink href="/" variant="light">Home</NavLink></li>
          <li><NavLink href="/about" variant="light">About</NavLink></li>
          <li><NavLink href="/menu" variant="light">Menu</NavLink></li>
          <li><NavLink href="/location" variant="light">Location</NavLink></li>
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-2 p-2 z-20 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-8 h-1 bg-[var(--brown)] rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
          />
          <div
            className={`bg-[var(--brown)] rounded-full transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-8 h-1"
              }`}
          />
          <div
            className={`w-8 h-1 bg-[var(--brown)] rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Navigation with smooth animation */}
      <div
        className={`absolute my-[-0.1px] left-0 top-[90px] sm:top-[90px] w-full ${blurEffect} ${bgColor} transition-all duration-500 ease-in-out overflow-hidden md:hidden`}
      >
        <ul className={`navlinksvert ${isOpen ? "active" : ""}`}>
          <li className={`li ${isOpen ? "active" : ""} px-3 text-xl`}>
            <NavLink href="/" variant="light">Home</NavLink>
          </li>
          <li className={`li ${isOpen ? "active" : ""} px-3 text-xl`}>
            <NavLink href="/about" variant="light">About</NavLink>
          </li>
          <li className={`li ${isOpen ? "active" : ""} px-3 text-xl`}>
            <NavLink href="/menu" variant="light">Menu</NavLink>
          </li>
          <li className={`li ${isOpen ? "active" : ""} px-3 text-xl`}>
            <NavLink href="/location" variant="light">Location</NavLink>
          </li>
          <div className="flex justify-center w-full">
            <hr className={`hr-transparent ${isOpen ? "active" : ""}`} />
          </div>
        </ul>
      </div>
    </nav>
  );
}