
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive the latest updates about our ICO.",
        variant: "default",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="container-section">
      <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 bg-gradient-to-r from-ico-primary/20 to-ico-secondary/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on StellarCoin, upcoming events, and exclusive opportunities for early supporters.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field flex-grow"
            />
            <Button 
              type="submit" 
              className="ico-btn-primary whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-3 text-center">
            We respect your privacy and will never share your information.
          </p>
        </form>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
            <p className="text-white/70">Team Members</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">1,250</p>
            <p className="text-white/70">ETH Raised</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">12K+</p>
            <p className="text-white/70">Community Members</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">5</p>
            <p className="text-white/70">Global Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
