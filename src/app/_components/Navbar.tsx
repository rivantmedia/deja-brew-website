"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--nav-background)] h-[120px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 relative left-5 w-[90px] h-[90px] sm:w-[80px] sm:h-[80px] md:w-[85px] md:h-[85px]">
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
          <li><NavLink href="/location" variant="light">Locations</NavLink></li>
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2 z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div 
            className={`w-6 h-0.5 bg-[var(--brown)] transition-all duration-300 ${
              isOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          />
          <div 
            className={`w-6 h-0.5 bg-[var(--brown)] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div 
            className={`w-6 h-0.5 bg-[var(--brown)] transition-all duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-[100px] left-0 w-full bg-[var(--nav-background)] shadow-lg transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col py-2 pl-6">
          <li className="px-4 py-2">
            <NavLink href="/" variant="light">Home</NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink href="/about" variant="light">About</NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink href="/menu" variant="light">Menu</NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink href="/location" variant="light">Locations</NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </nav>
  );
}