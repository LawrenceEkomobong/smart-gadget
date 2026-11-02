import React from 'react';
import { CATEGORIES } from '../data/categories';
import { CategoryCard } from './CategoryCard';
import { Layers } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Product Catalogue</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              What We Sell
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              We supply genuine digital devices and practical home appliances. Browse by category to explore our available product selections.
            </p>
          </div>

          <div className="text-xs text-slate-500 hidden sm:block">
            Showing <span className="font-semibold text-slate-800">{CATEGORIES.length}</span> main gadget categories
          </div>
        </div>

        {/* Categories Grid: 1 col on small, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
