import React from 'react';
import { Layers, Wallet, Users, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: Layers,
      title: 'Wide Range of Gadgets',
      description: 'From smartphones and laptops to cooling fans, kettles, and audio gear, find all practical electronics in one stop.',
    },
    {
      icon: Wallet,
      title: 'Affordable Options',
      description: 'Practical gadgets selected to fit real student, home, and business budgets without sacrificing reliability.',
    },
    {
      icon: Users,
      title: 'Helpful Customer Service',
      description: 'Friendly, personalized assistance to guide you toward the right gadget model for your specific routine.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Products',
      description: 'Every product is tested and backed with manufacturer warranties so you can purchase with full peace of mind.',
    },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Why Choose SmartGadgets
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Straightforward service, dependable electronics, and genuine customer care.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/70 rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:bg-slate-100/60 hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
