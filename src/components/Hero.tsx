import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/contactInfo';

interface HeroProps {
  onViewProducts: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProducts, onContactUs }) => {
  return (
    <section id="hero" className="relative bg-white text-slate-900 overflow-hidden py-12 md:py-16 lg:py-20 border-b border-slate-200">
      {/* Background subtle geometric texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-75 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small business badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Retail & Inquiries • Lagos, Nigeria</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Quality Gadgets. <br />
              <span className="text-blue-600">Reliable Choices.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              SmartGadgets provides smartphones, laptops, TVs, household electronics and other useful digital gadgets at reasonable prices. Explore our curated catalogue and contact us directly for genuine products and straightforward purchase arrangements.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-view-products-button"
                onClick={onViewProducts}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                id="hero-contact-us-button"
                onClick={onContactUs}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-blue-600" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Micro value badges */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Verified Authentic Items</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Fair, Direct Pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Trusted Local Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean composition of gadget images (phone, laptop, headphones) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Laptop showcase card */}
              <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 shadow-md overflow-hidden">
                <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100 relative border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
                    alt="Laptop for office and school productivity"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-[11px] font-medium shadow-xs">
                    Productivity Laptops
                  </div>
                </div>

                {/* Sub composition cards grid */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  
                  {/* Smartphone preview */}
                  <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs flex items-center space-x-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80"
                      alt="Smartphones"
                      className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-900 truncate">Smartphones</div>
                      <div className="text-[11px] text-slate-500 truncate">5G & 4G Devices</div>
                    </div>
                  </div>

                  {/* Headphones preview */}
                  <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs flex items-center space-x-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
                      alt="Headphones & Audio"
                      className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-900 truncate">Audio & Sound</div>
                      <div className="text-[11px] text-slate-500 truncate">Earbuds & Speakers</div>
                    </div>
                  </div>

                </div>

                {/* Bottom mini status bar */}
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 px-1">
                  <span>SmartGadgets Showcase</span>
                  <span className="text-blue-600 font-medium">Genuine Stock Only</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
