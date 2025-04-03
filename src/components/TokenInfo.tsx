
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Zap, Globe, Shield, ArrowUpRight } from 'lucide-react';

const TokenInfo = () => {
  return (
    <section id="token" className="container-section">
      <h2 className="section-title">About StellarCoin</h2>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="relative">
            <div className="w-64 h-64 mx-auto bg-gradient-to-r from-ico-primary to-ico-secondary rounded-full flex items-center justify-center token-glow">
              <div className="text-white text-5xl font-bold">STC</div>
            </div>
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white">ERC-20</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Token Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/70">Token Name</span>
                <span className="text-white">StellarCoin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Token Symbol</span>
                <span className="text-white">STC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Token Type</span>
                <span className="text-white">ERC-20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Total Supply</span>
                <span className="text-white">100,000,000 STC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Initial Circulating Supply</span>
                <span className="text-white">20,000,000 STC</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">The Next Generation of DeFi</h3>
          <p className="text-white/80 mb-8">
            StellarCoin (STC) is a revolutionary ERC-20 token designed to bridge the gap between traditional finance and 
            the world of decentralized applications. With our innovative cross-chain functionality 
            and smart contract integration, STC enables seamless transactions, staking rewards, and 
            governance participation.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-ico-primary">
                <Check size={20} />
              </div>
              <p className="text-white/80">Advanced smart contract functionality for DeFi applications</p>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-ico-primary">
                <Check size={20} />
              </div>
              <p className="text-white/80">Cross-chain compatibility with major blockchain networks</p>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-ico-primary">
                <Check size={20} />
              </div>
              <p className="text-white/80">Proof-of-Stake consensus with attractive staking rewards</p>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-ico-primary">
                <Check size={20} />
              </div>
              <p className="text-white/80">Community governance through decentralized voting</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button className="ico-btn-primary flex items-center gap-2">
              <Zap size={18} />
              <span>Buy Tokens Now</span>
            </Button>
            <Button className="ico-btn-secondary flex items-center gap-2">
              <ArrowUpRight size={18} />
              <span>View Contract</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-xl hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-ico-primary/20 flex items-center justify-center mb-4">
            <Zap className="text-ico-primary" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
          <p className="text-white/70">Experience near-instant transaction confirmations with our optimized blockchain architecture.</p>
        </div>
        
        <div className="glass p-6 rounded-xl hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-ico-secondary/20 flex items-center justify-center mb-4">
            <Globe className="text-ico-secondary" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Cross-Chain Compatible</h3>
          <p className="text-white/70">Seamlessly interact with multiple blockchain networks through our innovative bridge technology.</p>
        </div>
        
        <div className="glass p-6 rounded-xl hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-ico-accent/20 flex items-center justify-center mb-4">
            <Shield className="text-ico-accent" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Ultra Secure</h3>
          <p className="text-white/70">Security is our priority with multi-layered protection and regular security audits by top firms.</p>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
