import React from 'react';
import { Smartphone, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/contactInfo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'categories', label: 'Categories' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {BUSINESS_CONTACT.name}
              </span>
            </div>
            <p className="text-slate-300 text-sm font-medium">
              &quot;{BUSINESS_CONTACT.tagline}&quot;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing smartphones, laptops, 4K TVs, home electronics, fans, and everyday digital accessories at fair and reasonable prices.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Snapshot */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Contact & Location
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS_CONTACT.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_CONTACT.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONTACT.email}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONTACT.location}, {BUSINESS_CONTACT.cityCountry}
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${BUSINESS_CONTACT.whatsappRaw}?text=${encodeURIComponent('Hello SmartGadgets, I would like to make an enquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp Inquiries Available
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            &copy; {currentYear} {BUSINESS_CONTACT.name}. All rights reserved.
          </div>
          <div className="text-slate-400">
            Digital Showcase & Inquiries • Non-transactional website
          </div>
        </div>

      </div>
    </footer>
  );
};
