import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { REGISTRATION_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop" 
          alt="Vintage Camera Lens" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block px-3 md:px-4 py-1 border border-gold-500/50 rounded-full text-gold-400 text-[10px] sm:text-xs md:text-sm font-medium tracking-widest md:tracking-[0.2em] mb-6 animate-fade-in-up whitespace-nowrap">
          TEJGAON COLLEGE PHOTOGRAPHY CLUB
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-2xl">
            Frames of Six<span className="text-gold-500">’</span>
          </h1>

          <img 
            src="/hero.png" 
            alt="Frames of Six Hero Visual" 
            className="w-full max-w-md md:max-w-xl my-4 md:my-6 object-contain animate-fade-in-up"
          />
          
          <div className="grid grid-cols-[auto_1fr] gap-x-0 mt-0 text-left w-fit mx-auto">
            {/* Row 1: Photo Contest */}
            <div className="col-start-2 row-start-1 pb-1 md:pb-2">
              <span className="block text-[33px] sm:text-[39px] md:text-[63px] lg:text-[75px] font-normal font-antonio text-zinc-300 leading-none uppercase tracking-wide">
                Photo Contest
              </span>
            </div>
            
            {/* Row 2: & Exhibition 2.0 */}
            <div className="col-start-1 row-start-2 flex items-start justify-end">
              <span className="font-cursive text-[83px] sm:text-[95px] md:text-[119px] lg:text-[151px] text-gold-500 leading-none relative -top-[7px] -mr-4 sm:-mr-6 md:-mr-8">
                &
              </span>
            </div>
            <div className="col-start-2 row-start-2 flex items-start">
              <span className="block font-antonio text-[33px] sm:text-[39px] md:text-[63px] lg:text-[75px] font-bold text-white leading-none uppercase tracking-[0]">
                Exhibition 2.0
              </span>
            </div>
          </div>
        </div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed font-light">
          Celebrating 6 years of creativity, passion, and visual storytelling.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gold-500 text-black font-bold text-lg rounded-full hover:bg-white transition-all flex items-center gap-2"
          >
            Submit Your Photos
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#about"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500 flex flex-col items-center gap-2">
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;