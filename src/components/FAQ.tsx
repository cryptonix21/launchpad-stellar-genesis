
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is StellarCoin (STC)?",
      answer: "StellarCoin (STC) is an ERC-20 token built on the Ethereum blockchain designed to revolutionize cross-chain interactions and provide a seamless DeFi experience. It features advanced smart contract functionality, staking rewards, and community governance."
    },
    {
      question: "How can I participate in the ICO?",
      answer: "To participate in the StellarCoin ICO, you need to connect your Ethereum wallet (like MetaMask), complete the KYC verification process if required, and purchase tokens using ETH. The minimum purchase amount is 0.1 ETH."
    },
    {
      question: "When will STC be listed on exchanges?",
      answer: "StellarCoin will be listed on decentralized exchanges (DEXs) within 48 hours after the ICO concludes. Centralized exchange listings are planned to follow within 2-4 weeks, subject to market conditions and exchange requirements."
    },
    {
      question: "Is there a vesting period for token distribution?",
      answer: "Yes, different token allocations have different vesting schedules. Public sale tokens will be fully unlocked at Token Generation Event (TGE). Team and advisor tokens have a 12-month cliff followed by a 36-month linear vesting period. Ecosystem tokens are released quarterly based on development milestones."
    },
    {
      question: "How can I stake my STC tokens?",
      answer: "Once the staking platform is launched in Q3 2025, you'll be able to stake your STC tokens through our official website or decentralized application. Staking will provide annual rewards ranging from 5-12% depending on the lock-up period you choose."
    },
    {
      question: "Has the smart contract been audited?",
      answer: "Yes, the StellarCoin smart contract has been audited by leading blockchain security firms to ensure security and reliability. Audit reports are available on our website under the 'Security' section."
    },
    {
      question: "What makes StellarCoin different from other tokens?",
      answer: "StellarCoin differentiates itself through its innovative cross-chain compatibility, advanced smart contract functionality, and focus on real-world applications. Our team's deep experience in blockchain technology and strategic partnerships positions STC uniquely in the market."
    },
  ];

  return (
    <section id="faq" className="container-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto glass p-8 rounded-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-b-0">
              <AccordionTrigger className="text-white text-left hover:text-ico-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-8 text-center">
          <p className="text-white/80 mb-4">Don't see your question here?</p>
          <a 
            href="#" 
            className="text-ico-primary hover:text-ico-secondary transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
