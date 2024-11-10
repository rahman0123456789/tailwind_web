"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {

  const [menuOpen, setMenuOpen]= useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="shadow-md sticky bg-background/50 top-0 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/">
           <h1 className='text-3xl font-bold italic hover:text-yellow-300'>Rahman</h1>
           </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/work" className=" hover:text-blue-400 font-semibold">Works</Link>
            <Link href="/blog" className=" hover:text-blue-400 font-semibold">Blog</Link>
            <Link href="/contact" className=" hover:text-blue-400 font-semibold">Contact</Link>
            
            
          </div>

          {/* mobile Navbar */}
          <div className='md:hidden mt-5' onClick={toggleMenu}>
            {menuOpen ? <IoMdClose size={25}/> : <CiMenuFries size={25}/>}
         
          </div>
        </div>
      </div>
      {menuOpen && (
      <div className="flex flex-col gap-6 items-center pb-5 shadow-md">
      <Link href="/work" className=" hover:text-blue-400">Works</Link>
      <Link href="/blog" className=" hover:text-blue-400">Blog</Link>
      <Link href="/contact" className=" hover:text-blue-400">Contact</Link>
     
      
    </div>
      )}
    </nav>
  );
};

export default Navbar;
