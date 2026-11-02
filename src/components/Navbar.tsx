import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/contactInfo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'categories', label: 'Categories' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 text-slate-900 backdrop-blur-md shadow-xs border-b border-slate-200'
          : 'bg-white text-slate-900 border-b border-slate-200'
      }`}
    >
      {/* Top micro bar for phone contact */}
      <div className="hidden sm:block bg-slate-50 border-b border-slate-200/80 py-1.5 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-slate-700">Electronics & Household Gadget Showcase</span>
            <span className="text-slate-300">•</span>
            <span>{BUSINESS_CONTACT.cityCountry}</span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${BUSINESS_CONTACT.phoneRaw}`}
              className="flex items-center space-x-1.5 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{BUSINESS_CONTACT.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_CONTACT.whatsappRaw}?text=${encodeURIComponent('Hello SmartGadgets, I would like to enquire about your gadgets.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-emerald-700 transition-colors text-emerald-600 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Enquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center space-x-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            id="brand-logo-link"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">SmartGadgets</span>
              <span className="block text-[10px] text-slate-500 tracking-wider uppercase font-medium">Digital & Household</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              id="navbar-contact-button"
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2.5">
            <button
              id="mobile-nav-contact-cta"
              onClick={() => handleLinkClick('contact')}
              className="w-full text-center py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-xs"
            >
              Contact Us / Make Enquiry
            </button>

            <div className="flex items-center justify-around pt-2 text-xs text-slate-500">
              <a
                href={`tel:${BUSINESS_CONTACT.phoneRaw}`}
                className="flex items-center space-x-1.5 py-1 text-slate-700 hover:text-blue-600 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call Us</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href={`https://wa.me/${BUSINESS_CONTACT.whatsappRaw}?text=${encodeURIComponent('Hello SmartGadgets, I would like to enquire about your products.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 py-1 text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
