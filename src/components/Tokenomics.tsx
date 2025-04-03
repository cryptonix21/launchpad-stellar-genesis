
import React, { useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Tokenomics = () => {
  const distributionData = [
    { name: 'Public Sale', value: 40, color: '#8B5CF6' },
    { name: 'Team & Advisors', value: 15, color: '#0EA5E9' },
    { name: 'Marketing', value: 10, color: '#06B6D4' },
    { name: 'Ecosystem Development', value: 15, color: '#6366F1' },
    { name: 'Liquidity', value: 10, color: '#D946EF' },
    { name: 'Reserve', value: 10, color: '#F97316' },
  ];
  
  const items = [
    { name: 'Public Sale', value: '40%', color: '#8B5CF6', desc: 'Tokens available to early investors and public sale participants' },
    { name: 'Team & Advisors', value: '15%', color: '#0EA5E9', desc: 'Allocated to the team and advisors with a 1-year cliff and 3-year vesting' },
    { name: 'Marketing', value: '10%', color: '#06B6D4', desc: 'Reserved for marketing initiatives, partnerships, and community building' },
    { name: 'Ecosystem Development', value: '15%', color: '#6366F1', desc: 'Funding for platform development, integrations, and ecosystem growth' },
    { name: 'Liquidity', value: '10%', color: '#D946EF', desc: 'Dedicated to ensure market liquidity across major exchanges and DEXs' },
    { name: 'Reserve', value: '10%', color: '#F97316', desc: 'Strategic reserve for future expansion and unforeseen requirements' },
  ];

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <section id="tokenomics" className="container-section">
      <h2 className="section-title">Tokenomics</h2>
      
      <div className="glass p-8 md:p-12 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div ref={chartRef} className="h-[300px] md:h-[400px] opacity-0" style={{ transition: 'opacity 1s ease-in-out' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                    const radius = outerRadius + 15;
                    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                    return (
                      <text 
                        x={x} 
                        y={y} 
                        fill="white" 
                        textAnchor={x > cx ? 'start' : 'end'} 
                        dominantBaseline="central"
                        fontSize={12}
                        fontWeight="bold"
                      >
                        {`${(percent * 100).toFixed(0)}%`}
                      </text>
                    );
                  }}
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value}%`, 'Allocation']}
                  contentStyle={{ backgroundColor: 'rgba(13, 17, 31, 0.9)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
                  itemStyle={{ color: 'white' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Token Distribution</h3>
            <p className="text-white/80 mb-6">
              StellarCoin (STC) has a total supply of 100,000,000 tokens, distributed strategically to ensure 
              long-term project growth and sustainability.
            </p>
            
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-white">{item.value}</span>
                    </div>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/10 p-6 rounded-xl inline-block">
            <h3 className="text-xl font-semibold text-white mb-4">Token Vesting Schedule</h3>
            <p className="text-white/80 mb-4">
              Team and advisor tokens are subject to a 12-month cliff and 36-month linear vesting period.
              Ecosystem tokens are released quarterly based on development milestones.
            </p>
            <p className="text-white/80">
              40% of the total supply will be available at TGE (Token Generation Event),
              with the remaining tokens unlocked according to the vesting schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
