"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50" tabIndex={0} onBlur={() => setIsOpen(false)}>
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--nav-background)] h-[120px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 relative w-[65px] h-[65px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] left-2 md:left-5"
        >
          <Image
            src="/Desktop/logo.png"
            fill
            alt="Logo"
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 items-center pr-8 md:pr-10 lg:pr-16">
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

      {/* Mobile Navigation - Now with transparent background */}
      <div
        className={`absolute top-[100px] left-0 w-full backdrop-blur-sm transition-all duration-300 md:hidden`}
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