
import React from 'react';
import { Twitter, Github, Linkedin, Globe, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-ico-primary to-ico-secondary"></div>
              <span className="ml-2 text-xl font-bold text-white">StellarCoin</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              StellarCoin is an innovative ERC-20 token designed to revolutionize the DeFi space by providing seamless cross-chain functionality and smart contract integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Smart Contract</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Token Sale</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} StellarCoin. All rights reserved.
          </p>
          <p className="text-white/40 text-sm mt-2">
            The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice, and you should not treat any of the website's content as such.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
