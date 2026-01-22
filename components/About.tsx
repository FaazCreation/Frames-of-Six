import React from 'react';
import { BENEFITS } from '../constants';
import Reveal from './Reveal';
import { MapPin, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
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
              <p className="text-zinc-400 text-[15px] md:text-lg leading-relaxed mb-8">
                This special photography contest and exhibition will be held on <strong className="text-white">28–29 January</strong>, creating a platform for photographers to express their unique perspectives. Whether you capture landscapes, portraits, or street life, this is your stage.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-gold-500/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="text-gold-500" size={20} />
                  Exhibition Venue
                </h3>
                <p className="text-zinc-300 text-[15px] leading-relaxed mb-4">
                  The exhibition will take place at the <strong className="text-white">Tejgaon College Campus</strong>.
                  <br />
                  <span className="text-zinc-400 text-sm">16 Indira Road, Farmgate, Dhaka 1215</span>
                </p>
                
                <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden mb-4 relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.865860768915!2d90.38858382604505!3d23.75217128870933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a324021821%3A0x6d88f8c05704983!2sTejgaon%20College!5e0!3m2!1sen!2sbd!4v1705600000000!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tejgaon College Map"
                    className="group-hover:filter-none transition-all duration-500"
                  ></iframe>
                </div>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Tejgaon+College+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-medium text-sm transition-colors"
                >
                  Get Directions <ExternalLink size={14} />
                </a>
              </div>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sticky top-24">
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