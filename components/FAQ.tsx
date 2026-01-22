import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';
import Reveal from './Reveal';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center justify-center p-3 bg-zinc-900 rounded-full mb-4 border border-zinc-800">
              <HelpCircle className="w-6 h-6 text-gold-500" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Common Questions</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 max-w-2xl mx-auto text-[13px] md:text-base">
              Everything you need to know about Frames of Six 2.0. If you can't find the answer here, feel free to contact us.
            </p>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={index} delay={index * 0.1} direction="up">
              <div 
                className={`border rounded-xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-zinc-900/50 border-gold-500/30 shadow-lg shadow-gold-500/5' 
                    : 'bg-zinc-900/20 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-medium text-[15px] md:text-lg ${openIndex === index ? 'text-white' : 'text-zinc-300'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gold-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-zinc-500" />
                    )}
                  </span>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-zinc-400 leading-relaxed border-t border-transparent text-[13px] md:text-base">
                       {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;