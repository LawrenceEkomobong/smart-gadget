import React, { useState, useEffect } from 'react';
import { Product } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductsSection } from './components/ProductsSection';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [prefilledProductForContact, setPrefilledProductForContact] = useState('');

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sections = ['hero', 'categories', 'products', 'about', 'why-us', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // account for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // When a user clicks a category card in "What We Sell"
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    handleNavigate('products');
  };

  // When a user clicks "Enquire About This Product" in the Product Details modal
  const handleEnquireProduct = (product: Product) => {
    setSelectedProduct(null);
    setPrefilledProductForContact(product.name);
    setTimeout(() => {
      handleNavigate('contact');
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Responsive Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onViewProducts={() => handleNavigate('products')}
          onContactUs={() => handleNavigate('contact')}
        />

        {/* What We Sell / Categories Section */}
        <CategoriesSection onSelectCategory={handleCategorySelect} />

        {/* Featured Products Section */}
        <ProductsSection
          selectedCategoryId={selectedCategoryId}
          onSelectCategoryFilter={setSelectedCategoryId}
          onViewProductDetails={(product) => setSelectedProduct(product)}
        />

        {/* About SmartGadgets Section */}
        <AboutSection />

        {/* Why Choose SmartGadgets */}
        <WhyChooseUs />

        {/* Contact & Enquiries Section */}
        <ContactSection
          prefilledProduct={prefilledProductForContact}
          onClearPrefilledProduct={() => setPrefilledProductForContact('')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Details Modal Dialog */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquireProduct}
      />

      {/* Subtle Floating WhatsApp Enquiry Shortcut */}
      <FloatingWhatsApp />
    </div>
  );
}
