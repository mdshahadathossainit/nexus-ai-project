import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "0", features: ["5 Projects", "Basic AI Chat", "1GB Storage"] },
    { name: "Pro", price: "29", features: ["Unlimited Projects", "Advanced AI", "Priority Support", "Custom Workflows"], highlight: true },
    { name: "Enterprise", price: "99", features: ["Custom API", "Team Analytics", "Dedicated Manager"] }
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-10 rounded-3xl glass flex flex-col ${plan.highlight ? 'border-purple-500 ring-1 ring-purple-500' : ''}`}>
              <h4 className="text-lg font-medium mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-purple-500" /> {feat}
                  </div>
                ))}
              </div>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-purple-600 hover:bg-purple-700' : 'bg-white/5 hover:bg-white/10'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
