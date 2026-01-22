import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-[21px] md:text-2xl font-bold text-white mb-4">Tejgaon College Photography Club</h4>
            <p className="text-zinc-500 max-w-xs text-[13px] md:text-base">
              Capturing moments, creating memories. Celebrating 6 years of excellence in photography.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-[11px] md:text-sm">Contact Us</h5>
            <ul className="space-y-3 text-zinc-400 text-[13px] md:text-base">
              <li className="flex items-center gap-2 hover:text-gold-500 transition-colors cursor-pointer">
                <Mail size={16} />
                creative.tcpc@gmail.com
              </li>
              <li>16 Indira Road, Farmgate, Dhaka 1215</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-[11px] md:text-sm">Follow Us</h5>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/tcpc.official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-[#1877F2] hover:text-white transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/tcpc.official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-[#FF0000] hover:text-white transition-all">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[11px] md:text-sm">
            © {new Date().getFullYear()} TCPC. All rights reserved.
          </p>
          <p className="text-zinc-700 text-[9px] md:text-xs">
            Designed & Developed by Faaz Creation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;