import React from 'react';
import { Award, BadgePercent, HeartHandshake, CheckCircle } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/contactInfo';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Products',
      description: 'We focus on gadgets that offer good performance, durable build quality, and lasting value for everyday use.',
    },
    {
      icon: BadgePercent,
      title: 'Fair Pricing',
      description: 'We aim to provide practical digital electronics and household appliances at reasonable, transparent prices.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Support',
      description: 'We help customers choose products that genuinely suit their needs and budget, before and after purchase.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Narrative Description */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider">
              <span>About Our Business</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              About SmartGadgets
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              SmartGadgets is a small, dedicated gadget business focused on providing customers with useful and reliable electronics for everyday life. Based in {BUSINESS_CONTACT.cityCountry}, we source and curate tested smartphones, laptops, smart TVs, standing fans, electric kettles, and audio accessories.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Rather than overwhelming you with confusing technical jargon or inflated markups, we keep things simple: genuine products, honest advice, and direct communication to make sure you get the right gadget for your daily routine or workplace.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Physical Store Presence & Nationwide Order Arrangement</span>
              </div>
            </div>
          </div>

          {/* Right: 3 Core Values */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-3">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {val.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
