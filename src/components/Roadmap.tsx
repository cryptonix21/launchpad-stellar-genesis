
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      title: 'Phase 1: Foundation',
      complete: true,
      timeline: 'Q1 2025',
      items: [
        'Project concept and whitepaper',
        'Team formation',
        'Initial smart contract development',
        'Community building and social media launch',
        'Website launch',
      ]
    },
    {
      title: 'Phase 2: ICO Launch',
      complete: true,
      timeline: 'Q2 2025',
      items: [
        'Private sale to early investors',
        'Security audit of smart contracts',
        'Public ICO launch',
        'Listing on first DEX',
        'Marketing campaign expansion',
      ]
    },
    {
      title: 'Phase 3: Ecosystem Growth',
      complete: false,
      timeline: 'Q3 2025',
      items: [
        'Launch of staking platform',
        'First cross-chain integration',
        'Centralized exchange listings',
        'Introduction of governance features',
        'Partnership announcements',
      ]
    },
    {
      title: 'Phase 4: Expansion',
      complete: false,
      timeline: 'Q4 2025',
      items: [
        'Mobile wallet app release',
        'Additional cross-chain bridges',
        'NFT marketplace integration',
        'Cross-chain DeFi applications',
        'Global ambassador program',
      ]
    },
    {
      title: 'Phase 5: Evolution',
      complete: false,
      timeline: 'Q1-Q2 2026',
      items: [
        'StellarCoin 2.0 protocol upgrade',
        'Layer 2 scaling solutions',
        'Enhanced governance system',
        'Enterprise partnerships',
        'Decentralized application incubator',
      ]
    },
  ];

  return (
    <section id="roadmap" className="container-section">
      <h2 className="section-title">Project Roadmap</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className={`glass p-6 md:p-8 rounded-2xl transition-transform hover:translate-y-[-5px] ${phase.complete ? 'border-l-4 border-ico-primary' : ''}`}>
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  {phase.complete ? (
                    <div className="flex items-center text-green-400">
                      <Check size={18} className="mr-2" />
                      <span>Completed</span>
                    </div>
                  ) : (
                    <span className="text-white/60">{phase.timeline}</span>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mt-4">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className={`mt-0.5 mr-3 ${phase.complete ? 'text-green-400' : 'text-ico-secondary'}`}>
                      {phase.complete ? <Check size={18} /> : <ArrowRight size={18} />}
                    </div>
                    <span className={`${phase.complete ? 'text-white' : 'text-white/80'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/80 max-w-2xl mx-auto">
            Our roadmap outlines the planned development of the StellarCoin ecosystem. While we strive to adhere to this timeline, we may adapt based on market conditions and technological advances to ensure the best outcomes for our community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
