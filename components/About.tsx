import React from 'react';
import { BENEFITS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-[33px] md:text-5xl font-bold text-white mb-6">
              A Legacy of <span className="text-gold-500 italic">Visual Storytelling</span>
            </h2>
            <p className="text-zinc-400 text-[15px] md:text-lg leading-relaxed mb-6">
              Frames of Six’ Photo Contest & Exhibition 2.0 is proudly organized by Tejgaon College Photography Club on the occasion of its 6th Founding Anniversary.
            </p>
            <p className="text-zinc-400 text-[15px] md:text-lg leading-relaxed">
              This special photography contest and exhibition will be held on <strong className="text-white">28–29 January</strong>, creating a platform for photographers to express their unique perspectives. Whether you capture landscapes, portraits, or street life, this is your stage.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://picsum.photos/id/101/400/500" 
              alt="Exhibition 1" 
              className="rounded-lg opacity-80 hover:opacity-100 transition-opacity translate-y-8"
            />
            <img 
              src="https://picsum.photos/id/250/400/500" 
              alt="Exhibition 2" 
              className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" 
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-[21px] md:text-2xl font-bold text-white mb-2">Why Participate?</h3>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="glass-card p-8 rounded-xl hover:bg-zinc-900/50 transition-colors group border border-zinc-800">
                <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-zinc-700">
                  <Icon className="w-7 h-7 text-gold-500" />
                </div>
                <h4 className="text-[17px] md:text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-zinc-400 leading-relaxed text-[13px] md:text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;