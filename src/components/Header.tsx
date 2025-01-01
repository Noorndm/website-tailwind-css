"use client"
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
   <header>
      <div className="flex justify-between items-center bg-white shadow-lg h-20 md:h-[110px] px-8 md:px-20">
        <div className="font-semibold text-4xl">VILLA</div>

        <nav className="lg:space-x-16 space-x-7  text-lg lg:text-xl font-semibold text-[#4e4e4e] hidden md:flex">
          <Link href="/" className="hover:text-[#ff6a00]">Home</Link>
          <Link href="/about" className="hover:text-[#ff6a00]">About</Link>
          <Link href="/properties" className="hover:text-[#ff6a00]">Properties</Link>
          <Link href="/contact" className="hover:text-[#ff6a00]">Contact</Link>
          <Link href="/" className="bg-black text-white py-2 px-4 rounded-full hover:text-[#ff6a00]">Schedule a visit</Link>
        </nav>
        <button onClick={handleMenu} className="text-3xl md:hidden"><GiHamburgerMenu/></button>
      </div>

    {/* handle Menu */}
    {isMenuOpen && (
      <div className='bg-gray-100 md:hidden shadow-xl'>
        <button onClick={handleMenu}>
        </button>

        <div>
            <ul className='py-2 text-center gap-7 flex flex-col text-2xl font-medium'>
              <li><Link href="/" className="hover:text-[#ff6a00] text-[#4e4e4e] shadow-md">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#ff6a00] text-[#4e4e4e] shadow-md">About</Link></li>
              <li><Link href="/properties" className="hover:text-[#ff6a00] text-[#4e4e4e]
              shadow-md">Properties</Link></li>
              <li><Link href="/contact" className="hover:text-[#ff6a00] text-[#4e4e4e]
              shadow-md">Contact</Link></li>
            </ul>
          </div>
      </div>
    )}

    </header>
  );
};

export default Header;
