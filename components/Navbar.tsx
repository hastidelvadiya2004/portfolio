'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" text-teal-400 bg-navy body-font sticky top-0">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <span className="ml-8 text-3xl font-semibold">Portfolio.</span>
          
          <button 
            className="md:hidden flex items-center justify-center p-2 ml-3 text-teal-400 hover:white focus:outline-none" 
            onClick={toggleMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              className="w-6 h-6" 
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <nav className={`flex flex-col md:flex-row md:ml-auto items-center text-base justify-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="#home" className="m-4 text-slate-400 hover:text-teal-400 text-lg">Home</Link>
          <Link href="#about" className="m-4 text-slate-400 hover:text-teal-400 text-lg">About</Link>
          <Link href="#skills" className="m-4 text-slate-400 hover:text-teal-400 text-lg">Skills</Link>
          <Link href="#projects" className="m-4 text-slate-400 hover:text-teal-400 text-lg">Projects</Link>
          <Link href="#contact" className="m-4 text-slate-400 hover:text-teal-400 text-lg">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
