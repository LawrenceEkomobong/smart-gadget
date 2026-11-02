import React, { useEffect } from 'react';
import { Product } from '../types';
import { BUSINESS_CONTACT } from '../data/contactInfo';
import { X, CheckCircle2, Phone, MessageSquare, ShieldCheck, Tag, ArrowRight } from 'lucide-react';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello SmartGadgets! I saw the ${product.name} (${product.price}) on your website and would like to enquire about its availability and purchase arrangements.`
  );

  return (
    <div
      id="product-details-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        id="product-details-modal-container"
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden my-6 transition-all animate-scale-up"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center space-x-2 text-xs font-medium text-slate-500">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            <span>Catalogue Item</span>
            <span>•</span>
            <span className="text-slate-700">{product.categoryName}</span>
          </div>

          <button
            id="close-product-details-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Product Image */}
            <div className="md:col-span-6 space-y-3">
              <div className="aspect-4/3 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 shadow-2xs relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute top-2.5 left-2.5">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      product.availability === 'In Stock'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                        product.availability === 'In Stock' ? 'bg-emerald-600' : 'bg-amber-600'
                      }`}
                    />
                    {product.availability}
                  </span>
                </div>
              </div>

              {/* Verified quality badge */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Original condition guaranteed. Tested before delivery or pickup.</span>
              </div>
            </div>

            {/* Right: Product Title, Pricing, & Description */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                  {product.brand}
                </div>
                <h2 id="modal-product-title" className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {product.name}
                </h2>
                <div className="mt-2 text-xs sm:text-sm text-slate-500 font-medium bg-slate-100/80 px-2.5 py-1.5 rounded-md inline-block">
                  {product.shortSpecs}
                </div>
              </div>

              {/* Price Display */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Indicative Price</span>
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">
                    {product.price}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Fulfillment</span>
                  <span className="text-xs font-medium text-slate-700">Pickup / Nationwide Delivery</span>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1.5">
                  Description
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              {product.keyFeatures && product.keyFeatures.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                    Key Highlights
                  </h3>
                  <ul className="space-y-1.5">
                    {product.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mr-2 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="border-t border-slate-200 pt-5">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {product.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 px-3 bg-slate-50 rounded-md border border-slate-100"
                >
                  <span className="text-slate-500 font-medium">{spec.label}</span>
                  <span className="text-slate-900 font-semibold text-right ml-2">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer: Action Buttons */}
        <div className="px-5 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500 hidden sm:block">
            Want to purchase or ask questions? Contact us now.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            {/* Direct WhatsApp button */}
            <a
              href={`https://wa.me/${BUSINESS_CONTACT.whatsappRaw}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-1.5 text-emerald-600" />
              <span>WhatsApp Enquiry</span>
            </a>

            {/* Main Form Enquiry CTA button */}
            <button
              id="modal-enquire-product-cta"
              onClick={() => onEnquire(product)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
            >
              <span>Enquire About This Product</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
