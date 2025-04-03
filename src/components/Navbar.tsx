
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient animate-pulse-slow"></div>
          <span className="ml-2 text-xl font-bold text-white">StellarCoin</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#token" className="text-white/80 hover:text-white transition-colors">Token</a>
          <a href="#tokenomics" className="text-white/80 hover:text-white transition-colors">Tokenomics</a>
          <a href="#roadmap" className="text-white/80 hover:text-white transition-colors">Roadmap</a>
          <a href="#team" className="text-white/80 hover:text-white transition-colors">Team</a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
          <Button className="ico-btn-primary">Join Presale</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#token" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Token</a>
            <a href="#tokenomics" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Tokenomics</a>
            <a href="#roadmap" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Roadmap</a>
            <a href="#team" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>Team</a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>FAQ</a>
            <Button className="ico-btn-primary w-full">Join Presale</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
