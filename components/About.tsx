import React from 'react';
import { BENEFITS } from '../constants';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Reveal>
              <h2 className="text-[33px] md:text-5xl font-bold text-white mb-6">
                A Legacy of <span className="text-gold-500 italic">Visual Storytelling</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-[15px] md:text-lg leading-relaxed mb-6">
                Frames of Six’ Photo Contest & Exhibition 2.0 is proudly organized by Tejgaon College Photography Club on the occasion of its 6th Founding Anniversary.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-[15px] md:text-lg leading-relaxed">
                This special photography contest and exhibition will be held on <strong className="text-white">28–29 January</strong>, creating a platform for photographers to express their unique perspectives. Whether you capture landscapes, portraits, or street life, this is your stage.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Reveal direction="left" delay={0.2} className="translate-y-8">
              <img 
                src="https://picsum.photos/id/101/400/500" 
                alt="Exhibition 1" 
                className="rounded-lg opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-[1.02] shadow-xl"
              />
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <img 
                src="https://picsum.photos/id/250/400/500" 
                alt="Exhibition 2" 
                className="rounded-lg opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-[1.02] shadow-xl" 
              />
            </Reveal>
          </div>
        </div>

        <Reveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h3 className="text-[21px] md:text-2xl font-bold text-white mb-2">Why Participate?</h3>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={index} delay={index * 0.15} direction="up" className="h-full">
                <div className="glass-card p-8 rounded-xl hover:bg-zinc-900/80 transition-all duration-300 group border border-zinc-800 h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.1)] hover:border-gold-500/30">
                  <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-700 group-hover:border-gold-500 text-gold-500 group-hover:text-gold-400 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-[17px] md:text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">{benefit.title}</h4>
                  <p className="text-zinc-400 leading-relaxed text-[13px] md:text-base group-hover:text-zinc-300 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;