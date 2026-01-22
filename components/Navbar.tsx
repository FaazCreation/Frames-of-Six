import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, REGISTRATION_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="https://i.imgur.com/wy43MI5.png" 
            alt="Frames of Six Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-zinc-300 hover:text-white hover:text-gold-400 transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-black font-bold text-sm uppercase tracking-wider rounded-full transition-all transform hover:scale-105"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[15px] md:text-lg font-medium text-zinc-300 hover:text-gold-500 block"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 bg-gold-500 text-black font-bold rounded mt-4 text-[13px] md:text-base"
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;