import React, { useState } from 'react';
import { Copy, Check, Info, CreditCard, Send } from 'lucide-react';
import { BKASH_NUMBER, REGISTRATION_LINK } from '../constants';
import CountdownTimer from './CountdownTimer';

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
          <h2 className="text-[33px] md:text-5xl font-bold text-white mb-6">Submission & Payment</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-[13px] md:text-base">
            Follow these simple steps to complete your registration. Ensure you have your payment transaction ID ready before filling out the form.
          </p>
        </div>

        <div className="mb-16">
          <CountdownTimer />
          <p className="text-center text-red-400 font-bold mt-4 animate-pulse text-[13px] md:text-base">
            Deadline: 26 January, 12:00 PM
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Instructions */}
          <div className="space-y-6">
            <h3 className="text-[21px] md:text-2xl font-bold text-white flex items-center gap-3">
              <Info className="text-gold-500" />
              Submission Rules
            </h3>
            <ul className="space-y-4">
              {[
                "Entry Fee: 500 BDT per image.",
                "You may submit unlimited images.",
                "Each image submission requires a separate payment of 500 BDT.",
                "After sending payment, fill in the registration form."
              ].map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-300 bg-zinc-950/50 p-4 rounded-lg border border-zinc-800 text-[13px] md:text-base">
                  <div className="min-w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-sm font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Card */}
          <div className="glass-card p-8 rounded-2xl border border-gold-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h3 className="text-[21px] md:text-2xl font-bold text-white flex items-center gap-3 mb-6">
              <CreditCard className="text-gold-500" />
              Payment Details
            </h3>

            <div className="bg-pink-600/90 p-6 rounded-xl text-white mb-8 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] md:text-sm font-medium opacity-90">bKash Send Money</span>
                <Send className="w-5 h-5 opacity-90" />
              </div>
              <div className="text-[27px] md:text-3xl font-sans font-bold tracking-wider mb-2">
                {BKASH_NUMBER}
              </div>
              <button 
                onClick={copyNumber}
                className="flex items-center gap-2 text-[11px] md:text-sm bg-black/20 hover:bg-black/30 px-3 py-1.5 rounded transition-colors"
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
                className="block w-full py-4 bg-white text-black font-bold text-[15px] md:text-lg rounded-xl hover:bg-gold-400 transition-colors"
              >
                Proceed to Registration Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionDetails;