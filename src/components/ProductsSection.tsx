import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, Info, RefreshCw } from 'lucide-react';

interface ProductsSectionProps {
  selectedCategoryId: string;
  onSelectCategoryFilter: (categoryId: string) => void;
  onViewProductDetails: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  selectedCategoryId,
  onSelectCategoryFilter,
  onViewProductDetails,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Category filter tabs
  const categoryTabs = useMemo(() => {
    return [
      { id: 'all', name: 'All Products' },
      ...CATEGORIES.map((cat) => ({ id: cat.id, name: cat.name })),
    ];
  }, []);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategoryId === 'all' || product.categoryId === selectedCategoryId;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.shortSpecs.toLowerCase().includes(query) ||
        product.categoryName.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryId, searchQuery]);

  const handleResetFilters = () => {
    onSelectCategoryFilter('all');
    setSearchQuery('');
  };

  return (
    <section id="products" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Product Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Featured Products
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Explore our curated inventory of smartphones, laptops, TVs, fans, kettles and audio gear. Click &quot;View Details&quot; to see full specifications and make an enquiry.
          </p>
        </div>

        {/* Informative notice badge: No checkout/cart notice */}
        <div className="mb-6 p-3.5 rounded-lg bg-blue-50 border border-blue-100 flex items-start sm:items-center space-x-3 text-xs sm:text-sm text-blue-900">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="font-semibold">Direct Enquiry Model:</strong> SmartGadgets is a product showcase. We do not use automated carts or online checkout. Contact us directly to confirm current stock, test devices, or finalize purchase arrangements.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Search bar */}
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="product-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by gadget name, brand (HP, Samsung...), or specs..."
              className="w-full pl-9 pr-4 py-2.5 bg-white text-sm text-slate-900 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills (Scrollable horizontally on mobile) */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
            {categoryTabs.map((tab) => {
              const isSelected = selectedCategoryId === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`filter-pill-${tab.id}`}
                  onClick={() => onSelectCategoryFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <div>
            Showing <span className="font-semibold text-slate-900">{filteredProducts.length}</span>{' '}
            {filteredProducts.length === 1 ? 'gadget' : 'gadgets'}
            {selectedCategoryId !== 'all' && (
              <span> in {categoryTabs.find((t) => t.id === selectedCategoryId)?.name}</span>
            )}
          </div>

          {(selectedCategoryId !== 'all' || searchQuery !== '') && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium space-x-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Products Grid: 4 cols on large, 2 cols on tablet, 1-2 on mobile */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProductDetails}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center max-w-md mx-auto my-8">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-900">No matching gadgets found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-4">
              We couldn&apos;t find anything matching &quot;{searchQuery}&quot;. Try selecting another category or resetting your search.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
