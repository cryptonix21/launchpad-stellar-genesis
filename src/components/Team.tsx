
import React from 'react';
import { Twitter, Linkedin, Globe } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Former blockchain developer at Ethereum Foundation with 8 years of experience in DeFi protocols.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=faces&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
        website: '#',
      }
    },
    {
      name: 'Sophia Rodriguez',
      role: 'CTO',
      bio: 'Smart contract specialist with a background in cryptography and secure systems architecture.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
        website: '#',
      }
    },
    {
      name: 'David Park',
      role: 'Head of Product',
      bio: 'Product strategist with experience at leading fintech companies and crypto exchanges.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
        website: '#',
      }
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Director',
      bio: 'Marketing expert with a focus on crypto community building and brand development.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
        website: '#',
      }
    },
  ];
  
  const advisors = [
    {
      name: 'Dr. Michael Stevens',
      role: 'Blockchain Advisor',
      bio: 'PhD in Distributed Systems, advisor to multiple successful blockchain projects.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
        website: '#',
      }
    },
    {
      name: 'Julia Chang',
      role: 'Financial Advisor',
      bio: 'Former investment banker specializing in cryptocurrency markets and tokenomics.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
        website: '#',
      }
    },
  ];

  return (
    <section id="team" className="container-section">
      <h2 className="section-title">Meet Our Team</h2>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all">
              <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-ico-primary/50">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-ico-primary mb-2">{member.role}</p>
                <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <a href={member.social.twitter} className="text-white/60 hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href={member.social.linkedin} className="text-white/60 hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.social.website} className="text-white/60 hover:text-white transition-colors">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-white text-center mt-16 mb-8">Advisors</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advisors.map((advisor, index) => (
            <div key={index} className="glass p-6 rounded-xl flex items-center hover:bg-white/10 transition-all">
              <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-ico-secondary/50 mr-4">
                <img 
                  src={advisor.image} 
                  alt={advisor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">{advisor.name}</h3>
                <p className="text-ico-secondary mb-1">{advisor.role}</p>
                <p className="text-white/70 text-sm mb-3">{advisor.bio}</p>
                
                <div className="flex space-x-3">
                  <a href={advisor.social.twitter} className="text-white/60 hover:text-white transition-colors">
                    <Twitter size={16} />
                  </a>
                  <a href={advisor.social.linkedin} className="text-white/60 hover:text-white transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href={advisor.social.website} className="text-white/60 hover:text-white transition-colors">
                    <Globe size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
