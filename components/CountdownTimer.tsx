import React, { useState, useEffect } from 'react';
import { DEADLINE_DATE } from '../constants';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    // Ensure we are counting down to the *next* Jan 26th if passed, or just use the constant
    // For this specific static demo, we'll assume the date in constants is correct.
    const difference = +DEADLINE_DATE - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-zinc-800/50 backdrop-blur border border-zinc-700 rounded-lg mb-2">
        <span className="text-[21px] md:text-3xl font-bold text-white font-sans">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-[9px] md:text-sm text-zinc-400 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 sm:gap-4 md:gap-8 py-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default CountdownTimer;