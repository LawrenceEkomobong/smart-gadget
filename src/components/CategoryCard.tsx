import React from 'react';
import { Category } from '../types';
import { 
  Smartphone, 
  Laptop, 
  Tablet, 
  Tv, 
  Wind, 
  Coffee, 
  Headphones, 
  Zap, 
  ArrowUpRight 
} from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelectCategory }) => {
  // Map icon name to Lucide icon component
  const getIcon = () => {
    switch (category.iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-600" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-600" />;
      case 'Tablet':
        return <Tablet className="w-5 h-5 text-blue-600" />;
      case 'Tv':
        return <Tv className="w-5 h-5 text-blue-600" />;
      case 'Fan':
        return <Wind className="w-5 h-5 text-blue-600" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-blue-600" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-blue-600" />;
      case 'Zap':
      default:
        return <Zap className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div
      id={`category-card-${category.id}`}
      onClick={() => onSelectCategory(category.id)}
      className="group bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer flex flex-col h-full"
    >
      {/* Category Image Header */}
      <div className="relative h-40 w-full overflow-hidden bg-slate-100">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        
        {/* Floating icon badge */}
        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-xs shadow-sm flex items-center justify-center border border-slate-200">
          {getIcon()}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
              {category.name}
            </h3>
            <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span className="text-blue-700 font-semibold group-hover:underline">
            View Catalogue
          </span>
          <span className="text-slate-400">Available In-Store</span>
        </div>
      </div>
    </div>
  );
};
