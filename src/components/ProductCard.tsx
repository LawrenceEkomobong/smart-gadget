import React from 'react';
import { Product } from '../types';
import { Eye, Check, Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col h-full overflow-hidden"
    >
      {/* Product Image Container */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            // Graceful fallback if image URL fails
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Top Badges: Category & Tag */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900/85 text-white backdrop-blur-xs">
            {product.categoryName}
          </span>
          {product.tag && (
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-600 text-white">
              {product.tag}
            </span>
          )}
        </div>

        {/* Stock status indicator */}
        <div className="absolute bottom-2.5 right-2.5">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
              product.availability === 'In Stock'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                product.availability === 'In Stock' ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
            />
            {product.availability}
          </span>
        </div>
      </div>

      {/* Product Details Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Name */}
          <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1">
            {product.brand}
          </div>
          <h3 className="text-base font-semibold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Short Specs */}
          <div className="mt-2 text-xs text-slate-600 line-clamp-2 bg-slate-50 rounded-md p-2 border border-slate-100">
            {product.shortSpecs}
          </div>
        </div>

        {/* Price & View Details Action */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <div className="text-xs text-slate-500">Indicative Price</div>
            <div className="text-base font-bold text-slate-900">
              {product.price}
            </div>
          </div>

          <button
            id={`btn-view-details-${product.id}`}
            onClick={() => onViewDetails(product)}
            className="w-full inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm font-medium rounded-lg text-slate-700 bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Eye className="w-4 h-4 mr-1.5" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};
