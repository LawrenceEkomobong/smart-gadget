import React, { useState, useEffect } from 'react';
import { BUSINESS_CONTACT } from '../data/contactInfo';
import { EnquiryFormData } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

interface ContactSectionProps {
  prefilledProduct?: string;
  onClearPrefilledProduct?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledProduct = '',
  onClearPrefilledProduct,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update product when prefilled
  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        product: prefilledProduct,
        message: prev.message || `Hello, I would like to inquire about the availability, current price, and delivery options for ${prefilledProduct}.`,
      }));
    }
  }, [prefilledProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.product.trim()) {
      newErrors.product = 'Please specify a product or topic of enquiry';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details for your enquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate brief client-side submission
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      const generatedRef = 'SG-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
    }, 400);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      product: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    if (onClearPrefilledProduct) {
      onClearPrefilledProduct();
    }
  };

  const whatsappDirectUrl = `https://wa.me/${BUSINESS_CONTACT.whatsappRaw}?text=${encodeURIComponent(
    formData.product
      ? `Hello SmartGadgets! My name is ${formData.fullName || 'Customer'}. I would like to enquire about ${formData.product}.`
      : 'Hello SmartGadgets! I would like to make an enquiry about your products.'
  )}`;

  return (
    <section id="contact" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Enquiries & Arrangements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Let&apos;s Talk About What You Need
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Have questions about a specific smartphone, laptop, or home appliance? Reach out directly using the form below, send a quick message on WhatsApp, or give us a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Business Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-7 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">SmartGadgets Store</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Retail, Device Testing & Enquiries
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Phone Number</div>
                    <a
                      href={`tel:${BUSINESS_CONTACT.phoneRaw}`}
                      className="text-white font-medium hover:text-blue-400 transition-colors"
                    >
                      {BUSINESS_CONTACT.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${BUSINESS_CONTACT.email}`}
                      className="text-white font-medium hover:text-blue-400 transition-colors"
                    >
                      {BUSINESS_CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-white font-medium">
                      {BUSINESS_CONTACT.location}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {BUSINESS_CONTACT.cityCountry}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Business Hours</div>
                    <div className="text-white font-medium">
                      {BUSINESS_CONTACT.openingHours}
                    </div>
                    <div className="text-xs text-slate-400">Sunday: Closed</div>
                  </div>
                </div>
              </div>

              {/* Prominent WhatsApp / Direct Call Option */}
              <div className="pt-5 border-t border-slate-800 space-y-2.5">
                <div className="text-xs text-slate-400 font-medium">
                  Instant Messaging Support:
                </div>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Chat with Us on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-80" />
                </a>

                <a
                  href={`tel:${BUSINESS_CONTACT.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 text-blue-400" />
                  <span>Call {BUSINESS_CONTACT.phone}</span>
                </a>
              </div>
            </div>

            {/* Practical buying guidance */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
              <div className="font-semibold text-slate-900">How Inquiries & Orders Work:</div>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li>Submit your gadget enquiry or reach out via WhatsApp.</li>
                <li>We confirm product availability, specification options, and exact pricing.</li>
                <li>Arrange physical inspection at our store or nationwide door-to-door delivery.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
              
              {isSubmitted ? (
                /* Success Message State */
                <div id="enquiry-success-message" className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. We have logged your enquiry regarding <strong className="text-slate-900">{formData.product}</strong>.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-sm mx-auto text-left text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Enquiry Ref:</span>
                      <span className="font-mono font-bold text-slate-900">{referenceId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Phone:</span>
                      <span className="font-medium text-slate-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Email:</span>
                      <span className="font-medium text-slate-900">{formData.email}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500">
                    Our team will contact you shortly during business hours.
                  </p>

                  <div className="pt-3 flex flex-wrap justify-center gap-3">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                      <span>Speed up via WhatsApp</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Enquiry Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Enquiry Form</h3>
                    <p className="text-xs text-slate-500">
                      Fill out your details and we will get back to you with product details and pricing.
                    </p>
                  </div>

                  {/* Pre-fill banner notice */}
                  {prefilledProduct && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between text-xs text-blue-900">
                      <span>
                        Enquiring about: <strong className="font-semibold">{prefilledProduct}</strong>
                      </span>
                      {onClearPrefilledProduct && (
                        <button
                          type="button"
                          onClick={onClearPrefilledProduct}
                          className="text-blue-600 hover:text-blue-800 underline font-medium ml-2"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-fullName"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Adeola Johnson"
                      className={`w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-lg border ${
                        errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0803 123 4567"
                        className={`w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-lg border ${
                          errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. adeola@example.com"
                        className={`w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-lg border ${
                          errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Product / Subject */}
                  <div>
                    <label
                      htmlFor="contact-product"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Product / Subject of Enquiry <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-product"
                      name="product"
                      type="text"
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="e.g. HP 15 Core i5 Laptop, Electric Standing Fan, or General Question"
                      className={`w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-lg border ${
                        errors.product ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.product && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.product}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Message / Questions <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need, questions about specifications, availability, or delivery arrangements..."
                      className={`w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-lg border ${
                        errors.message ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="submit-enquiry-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {submitting ? (
                        <span>Processing enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2">
                      No online payment required. We will reply with confirmed pricing and delivery info.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
