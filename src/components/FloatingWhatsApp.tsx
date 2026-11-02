import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/contactInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_CONTACT.whatsappRaw}?text=${encodeURIComponent(
    'Hello SmartGadgets, I would like to enquire about your available gadgets.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-30 flex items-center space-x-2">
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg border border-slate-700 animate-fade-in">
          <span>Need help choosing a gadget? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-slate-400 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Enquire on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};
