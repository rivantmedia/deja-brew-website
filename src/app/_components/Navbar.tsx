"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";
import { motion } from 'framer-motion';

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
          <motion.div
            className="w-8 h-1 bg-[var(--brown)] rounded-full"
            animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="bg-[var(--brown)] rounded-full"
            animate={isOpen ? { opacity: 0, width: 0 } : { width: 32, height: 4 }}
            initial={false}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-8 h-1 bg-[var(--brown)] rounded-full"
            animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Navigation with smooth animation */}
      <motion.div
        className={`absolute my-[-0.2px] left-0 top-[88.3px] sm:top-[90px] w-full ${blurEffect} ${bgColor} md:hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ margin: "-0.1px 0" }}
      >
        <motion.ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "35px",
            listStyle: "none",
            position: "relative",
            margin: 0,
            paddingLeft: "20px",
            width: "100%"
          }}
          initial={{
            height: "20px"
          }}
          animate={{
            height: isOpen ? "280px" : "20px",
            paddingTop: isOpen ? "10px" : 0
          }}
          transition={{
            duration: 0.25,
            ease: [0.175, 0.885, 0.32, 1.275]
          }}
        >
          <motion.li
            className="px-3 text-xl"
            style={{
              width: "min-content"
            }}
            initial={{
              opacity: 0,
              y: -15,
              pointerEvents: "none"
            }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -15,
              pointerEvents: isOpen ? "all" : "none"
            }}
            transition={{
              duration: 0.1
            }}
          >
            <NavLink href="/" variant="light">Home</NavLink>
          </motion.li>
          <motion.li
            className="px-3 text-xl"
            style={{
              width: "min-content"
            }}
            initial={{
              opacity: 0,
              y: -15,
              pointerEvents: "none"
            }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -15,
              pointerEvents: isOpen ? "all" : "none"
            }}
            transition={{
              duration: 0.1
            }}
          >
            <NavLink href="/about" variant="light">About</NavLink>
          </motion.li>
          <motion.li
            className="px-3 text-xl"
            style={{
              width: "min-content"
            }}
            initial={{
              opacity: 0,
              y: -15,
              pointerEvents: "none"
            }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -15,
              pointerEvents: isOpen ? "all" : "none"
            }}
            transition={{
              duration: 0.1
            }}
          >
            <NavLink href="/menu" variant="light">Menu</NavLink>
          </motion.li>
          <motion.li
            className="px-3 text-xl"
            style={{
              width: "min-content"
            }}
            initial={{
              opacity: 0,
              y: -15,
              pointerEvents: "none"
            }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -15,
              pointerEvents: isOpen ? "all" : "none"
            }}
            transition={{
              duration: 0.1
            }}
          >
            <NavLink href="/location" variant="light">Location</NavLink>
          </motion.li>
          <div className="flex justify-center w-full">
            <motion.hr
              style={{
                margin: "0 auto",
                transform: "translateY(-15px)"
              }}
              initial={{
                width: 0
              }}
              animate={{
                width: isOpen ? "25%" : 0,
                borderWidth: isOpen ? "3px" : 0,
                borderStyle: "solid",
                borderColor: "var(--dark-brown)",
                borderRadius: "20px",
                opacity: isOpen ? "20%" : 1
              }}
              transition={{
                duration: 0.1
              }}
            />
          </div>
        </motion.ul>
      </motion.div>
    </nav>
  );
}