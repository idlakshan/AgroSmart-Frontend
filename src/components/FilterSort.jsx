import React from 'react';
import { SlidersIcon, ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Legumes', 'Herbs'];

export const FilterSort = ({ sortBy, setSortBy, filterCategory, setFilterCategory }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <div className="flex items-center">
        <SlidersIcon size={16} className="mr-2 text-gray-500" />
        <span className="text-sm font-medium text-gray-700 mr-3">
          Filter by:
        </span>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilterCategory(category.toLowerCase())}
              className={`px-3 py-1 text-sm rounded-full ${
                filterCategory === category.toLowerCase()
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-sm font-medium text-gray-700 mr-3">Sort by:</span>
        <button
          onClick={() => setSortBy('confidence')}
          className={`flex items-center px-3 py-1 text-sm rounded-md mr-2 ${
            sortBy === 'confidence'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Confidence
          {sortBy === 'confidence' && <ArrowDownIcon size={14} className="ml-1" />}
        </button>
        <button
          onClick={() => setSortBy('name')}
          className={`flex items-center px-3 py-1 text-sm rounded-md ${
            sortBy === 'name'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Name
          {sortBy === 'name' && <ArrowUpIcon size={14} className="ml-1" />}
        </button>
      </div>
    </div>
  );
};
