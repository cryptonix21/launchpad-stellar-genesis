
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from 'lucide-react';

const TokenConverter = () => {
  const [ethAmount, setEthAmount] = useState<string>("1");
  const [tokenAmount, setTokenAmount] = useState<string>("10000");
  const [conversionDirection, setConversionDirection] = useState<'ethToToken' | 'tokenToEth'>('ethToToken');
  const conversionRate = 10000; // 1 ETH = 10,000 STC
  
  const calculateTokens = (eth: number): number => {
    return eth * conversionRate;
  };
  
  const calculateEth = (tokens: number): number => {
    return tokens / conversionRate;
  };
  
  useEffect(() => {
    if (conversionDirection === 'ethToToken') {
      // If ETH amount changes, update token amount
      const eth = parseFloat(ethAmount) || 0;
      setTokenAmount(calculateTokens(eth).toString());
    } else {
      // If token amount changes, update ETH amount
      const tokens = parseFloat(tokenAmount) || 0;
      setEthAmount(calculateEth(tokens).toFixed(6));
    }
  }, [ethAmount, tokenAmount, conversionDirection]);
  
  const handleEthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConversionDirection('ethToToken');
    setEthAmount(e.target.value);
  };
  
  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConversionDirection('tokenToEth');
    setTokenAmount(e.target.value);
  };
  
  const switchDirection = () => {
    setConversionDirection(conversionDirection === 'ethToToken' ? 'tokenToEth' : 'ethToToken');
  };

  return (
    <section className="container-section">
      <div className="max-w-2xl mx-auto glass p-8 rounded-3xl token-glow">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">Token Calculator</h2>
        
        <div className="mb-6">
          <label className="block text-white/80 mb-2">ETH Amount</label>
          <div className="relative">
            <input 
              type="number"
              value={ethAmount}
              onChange={handleEthChange}
              className="input-field"
              placeholder="Enter ETH amount"
              min="0"
              step="0.01"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="text-white/60">ETH</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center my-4">
          <Button
            onClick={switchDirection}
            variant="ghost"
            className="text-white hover:bg-white/10 rounded-full h-10 w-10 p-0"
          >
            <ArrowUpDown size={20} />
          </Button>
        </div>
        
        <div className="mb-6">
          <label className="block text-white/80 mb-2">StellarCoin Amount</label>
          <div className="relative">
            <input 
              type="number"
              value={tokenAmount}
              onChange={handleTokenChange}
              className="input-field"
              placeholder="Enter STC amount"
              min="0"
              step="1"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="text-white/60">STC</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col space-y-3 text-center text-white/80 text-sm">
          <p>Exchange Rate: 1 ETH = 10,000 STC</p>
          <p>Minimum Purchase: 0.1 ETH</p>
          <p>Gas fees not included in the calculation</p>
        </div>
        
        <Button className="ico-btn-primary w-full mt-6">
          Connect Wallet to Purchase
        </Button>
      </div>
    </section>
  );
};

export default TokenConverter;
