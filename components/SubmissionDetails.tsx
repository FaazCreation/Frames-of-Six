import React, { useState } from 'react';
import { Copy, Check, Info, CreditCard, Send } from 'lucide-react';
import { BKASH_NUMBER, REGISTRATION_LINK } from '../constants';
import CountdownTimer from './CountdownTimer';
import Reveal from './Reveal';

const SubmissionDetails: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyNumber = () => {
    navigator.clipboard.writeText(BKASH_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="submission" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-[33px] md:text-5xl font-bold text-white mb-6">Submission & Payment</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-zinc-400 max-w-2xl mx-auto text-[13px] md:text-base">
              Follow these simple steps to complete your registration. Ensure you have your payment transaction ID ready before filling out the form.
            </p>
          </Reveal>
        </div>

        <div className="mb-16">
          <Reveal delay={0.2} direction="none">
            <CountdownTimer />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-center text-red-400 font-bold mt-4 animate-pulse text-[13px] md:text-base">
              Deadline: 26 January, 12:00 PM
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Instructions */}
          <div className="space-y-6">
            <Reveal delay={0.2} direction="left">
              <h3 className="text-[21px] md:text-2xl font-bold text-white flex items-center gap-3">
                <Info className="text-gold-500" />
                Submission Rules
              </h3>
            </Reveal>
            <ul className="space-y-4">
              {[
                "Entry Fee: 500 BDT per image.",
                "You may submit unlimited images.",
                "Each image submission requires a separate payment of 500 BDT.",
                "After sending payment, fill in the registration form."
              ].map((rule, idx) => (
                <Reveal key={idx} delay={0.3 + (idx * 0.1)} direction="left">
                  <li className="flex items-start gap-3 text-zinc-300 bg-zinc-950/50 p-4 rounded-lg border border-zinc-800 text-[13px] md:text-base hover:border-gold-500/30 transition-colors">
                    <div className="min-w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-sm font-bold mt-0.5">
                      {idx + 1}
                    </div>
                    {rule}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Payment Card */}
          <Reveal delay={0.4} direction="right">
            <div className="glass-card p-8 rounded-2xl border border-gold-500/20 relative overflow-hidden group hover:border-gold-500/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-gold-500/20 transition-all duration-500"></div>
              
              <h3 className="text-[21px] md:text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <CreditCard className="text-gold-500" />
                Payment Details
              </h3>

              <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-xl text-white mb-8 shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-pink-600/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] md:text-sm font-medium opacity-90">bKash Send Money</span>
                  <Send className="w-5 h-5 opacity-90" />
                </div>
                <div className="text-[27px] md:text-3xl font-sans font-bold tracking-wider mb-2">
                  {BKASH_NUMBER}
                </div>
                <button 
                  onClick={copyNumber}
                  className="flex items-center gap-2 text-[11px] md:text-sm bg-black/20 hover:bg-black/30 px-3 py-1.5 rounded transition-colors backdrop-blur-sm"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied!" : "Copy Number"}
                </button>
              </div>

              <div className="text-center">
                <p className="text-zinc-400 mb-6 text-[11px] md:text-sm">
                  Have you completed the payment? Proceed to the registration form to upload your photo and submit transaction details.
                </p>
                <a 
                  href={REGISTRATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-white text-black font-bold text-[15px] md:text-lg rounded-xl hover:bg-gold-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transform hover:-translate-y-1"
                >
                  Proceed to Registration Form
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SubmissionDetails;