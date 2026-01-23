import React from 'react';
import Reveal from './Reveal';
import { Users } from 'lucide-react';

const COMMITTEE_MEMBERS = [
  "Mokaddesur Rahman Sun",
  "Arefin Tanvir Adhir",
  "Niaj Karim Rakib",
  "Forhad Hossain",
  "Imtiash Hossain Tomal",
  "Jannatun Nesa Bushra"
];

const Committee: React.FC = () => {
  return (
    <section id="committee" className="min-h-screen pt-32 pb-20 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
             <div className="inline-flex items-center justify-center p-3 bg-zinc-900 rounded-full mb-4 border border-zinc-800">
              <Users className="w-6 h-6 text-gold-500" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[33px] md:text-5xl font-bold text-white mb-6">Event Organizing Committee</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 max-w-2xl mx-auto text-[13px] md:text-base">
              The dedicated team working behind the scenes to make Frames of Six 2.0 a reality.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {COMMITTEE_MEMBERS.map((member, index) => (
            <Reveal key={index} delay={index * 0.1} direction="up">
              <div className="glass-card p-6 rounded-xl border border-zinc-800 hover:border-gold-500/30 transition-all duration-300 group text-center h-full hover:-translate-y-1 hover:bg-zinc-900/60">
                <div className="w-16 h-16 bg-zinc-900 rounded-full mx-auto mb-4 flex items-center justify-center border border-zinc-800 group-hover:border-gold-500/50 transition-colors shadow-lg shadow-black/20">
                  <span className="text-xl font-bold text-zinc-500 group-hover:text-gold-500 transition-colors">
                    {member.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-gold-500 transition-colors">
                  {member}
                </h3>
                <p className="text-zinc-500 text-sm mt-1">Organizing Member</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;