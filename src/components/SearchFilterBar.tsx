import React from 'react';
import { Search, X, Filter, Sparkles } from 'lucide-react';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  resultsCount: number;
  totalItemsCount: number;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Content' },
  { id: 'home', label: 'Enterprise Home' },
  { id: 'products', label: 'Products & TRINETRA' },
  { id: 'suraksha', label: 'SURAKSHA 6-Step Matrix' },
  { id: 'labs', label: 'AI Innovation Labs' },
  { id: 'capabilities', label: 'Core Capabilities' },
  { id: 'helplines', label: 'Helplines (112 / 1930)' },
  { id: 'founder', label: 'About Founder' },
  { id: 'news', label: 'Research & News' },
  { id: 'contact', label: 'Enterprise Contact' },
];

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  resultsCount,
  totalItemsCount,
}) => {
  return (
    <div className="w-full bg-[#161b2a]/95 border-b border-[#252a39] py-3 px-4 sm:px-6 sticky top-20 z-40 backdrop-blur-xl transition-all shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Main Search Input */}
        <div className="relative flex-1 max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#4cd7f6]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search TRINETRA, NIGHA, Detection AI, 112/1930, labs, founder dossier, capabilities..."
            className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-[#0e1321] border border-[#303444] text-sm text-[#dee2f6] placeholder-[#869397] focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-all font-body"
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center gap-1.5">
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="p-1 rounded-md text-[#869397] hover:text-white hover:bg-[#252a39] transition-colors"
                title="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#1a1f2e] text-[#869397] border border-[#303444]">
              ESC
            </span>
          </div>
        </div>

        {/* Status / Results Badge */}
        <div className="flex items-center gap-2 shrink-0">
          {searchQuery ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#06b6d4]/15 border border-[#4cd7f6]/30 text-[#4cd7f6]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{resultsCount} match{resultsCount === 1 ? '' : 'es'} found</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#1a1f2e] text-[#bcc9cd]">
              <Filter className="w-3.5 h-3.5 text-[#4cd7f6]" />
              <span>Filtering {totalItemsCount}+ enterprise modules</span>
            </span>
          )}
        </div>
      </div>

      {/* Category Pills Slider */}
      <div className="max-w-7xl mx-auto pt-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-[#06b6d4] text-[#003640] font-bold shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  : 'bg-[#1a1f2e] text-[#bcc9cd] hover:text-white hover:bg-[#252a39]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
