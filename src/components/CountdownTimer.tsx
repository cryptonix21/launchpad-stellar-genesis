
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set ICO date to 30 days from now
  const calculateEndDate = () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);
    return endDate;
  };

  const icoEndDate = calculateEndDate();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = icoEndDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup timer
    return () => clearInterval(timer);
  }, [icoEndDate]);

  return (
    <section className="container-section">
      <div className="glass p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
        <h2 className="section-title">ICO Ends In</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="glass p-4 md:p-6 rounded-xl token-glow">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.days}</p>
            <p className="text-white/60 text-lg">Days</p>
          </div>
          
          <div className="glass p-4 md:p-6 rounded-xl token-glow">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.hours}</p>
            <p className="text-white/60 text-lg">Hours</p>
          </div>
          
          <div className="glass p-4 md:p-6 rounded-xl token-glow">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.minutes}</p>
            <p className="text-white/60 text-lg">Minutes</p>
          </div>
          
          <div className="glass p-4 md:p-6 rounded-xl token-glow">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.seconds}</p>
            <p className="text-white/60 text-lg">Seconds</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/80 mb-4">Don't miss out on our early investor bonus!</p>
          <div className="bg-white/10 h-4 rounded-full overflow-hidden">
            <div 
              className="bg-gradient h-full rounded-full animate-pulse-slow"
              style={{ width: '65%' }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-white/60">
            <p>Soft Cap: 1,000 ETH</p>
            <p>Current: 1,250 ETH</p>
            <p>Hard Cap: 2,000 ETH</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
