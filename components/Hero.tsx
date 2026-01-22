import React from 'react';
import { ChevronRight } from 'lucide-react';
import { REGISTRATION_LINK } from '../constants';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen md:h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop" 
          alt="Vintage Camera Lens" 
          className="w-full h-full object-cover scale-105 animate-[zoomIn_20s_infinite_alternate]"
          style={{ animationDuration: '30s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <Reveal direction="down" delay={0.1}>
          <div className="inline-block px-3 md:px-4 py-1 border border-gold-500/50 rounded-full text-gold-400 text-[10px] sm:text-xs md:text-sm font-medium tracking-widest md:tracking-[0.2em] mb-6 whitespace-nowrap backdrop-blur-sm bg-black/20">
            TEJGAON COLLEGE PHOTOGRAPHY CLUB
          </div>
        </Reveal>
        
        <div className="flex flex-col items-center mb-0">
          <Reveal delay={0.2}>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-2xl">
              Frames of <span className="text-gradient-gold">Six</span><span className="text-gold-500">’</span>
            </h1>
          </Reveal>

          <Reveal delay={0.4} className="w-full flex justify-center">
            <img 
              src="https://i.imgur.com/Iz7nLsf.png" 
              alt="Frames of Six Hero Visual" 
              className="w-[85%] max-w-md md:max-w-xl mb-0 mt-0 object-contain animate-float"
            />
          </Reveal>
        </div>
        
        <Reveal delay={0.6}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed font-light">
            Celebrating 6 years of creativity, passion, and visual storytelling.
          </p>
        </Reveal>
        
        <Reveal delay={0.8}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-gold-500 text-black font-bold text-base rounded-full hover:bg-white transition-all flex items-center gap-2 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]"
            >
              Submit Your Photos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about"
              className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium text-base rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;