
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-ico-primary/20 rounded-full filter blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ico-secondary/20 rounded-full filter blur-3xl animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">StellarCoin</span>
            <span className="text-white"> - The Future of Decentralized Finance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 md:mb-10">
            The next-generation ERC20 token designed to revolutionize cross-chain interactions and enable seamless DeFi experiences
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="ico-btn-primary text-lg py-6 px-8 w-full sm:w-auto">
              Join Presale
            </Button>
            <Button className="ico-btn-secondary text-lg py-6 px-8 w-full sm:w-auto">
              Read Whitepaper
            </Button>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 glass p-6 rounded-2xl">
            <div className="text-center">
              <p className="text-white/60 mb-1">Presale Price</p>
              <p className="text-2xl font-bold text-white">1 ETH = 10,000 STC</p>
            </div>
            <div className="h-16 w-px bg-white/10 hidden md:block"></div>
            <div className="text-center">
              <p className="text-white/60 mb-1">Raised So Far</p>
              <p className="text-2xl font-bold text-white">1,250 ETH</p>
            </div>
            <div className="h-16 w-px bg-white/10 hidden md:block"></div>
            <div className="text-center">
              <p className="text-white/60 mb-1">Listing Price</p>
              <p className="text-2xl font-bold text-white">1 ETH = 8,000 STC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
