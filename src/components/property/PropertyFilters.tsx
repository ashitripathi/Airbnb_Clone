import React, { useState } from 'react';
import { DivideIcon as LucideIcon, Home, Building, Warehouse, Tent, Mountain, Sailboat, Building2, TreePine, Castle, Umbrella } from 'lucide-react';

interface FilterOption {
  id: string;
  name: string;
  icon: LucideIcon;
}

const filterOptions: FilterOption[] = [
  { id: 'all', name: 'All', icon: Home },
  { id: 'apartment', name: 'Apartments', icon: Building },
  { id: 'house', name: 'Houses', icon: Building2 },
  { id: 'cabin', name: 'Cabins', icon: Warehouse },
  { id: 'camping', name: 'Camping', icon: Tent },
  { id: 'mountain', name: 'Mountain', icon: Mountain },
  { id: 'beach', name: 'Beach', icon: Umbrella },
  { id: 'boat', name: 'Boats', icon: Sailboat },
  { id: 'forest', name: 'Forest', icon: TreePine },
  { id: 'castle', name: 'Castles', icon: Castle },
];

interface PropertyFiltersProps {
  onFilterChange: (filter: string) => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className="border-b border-neutral-200 py-5">
      <div className="container-custom">
        <div className="flex items-center overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex space-x-8">
            {filterOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => handleFilterClick(option.id)}
                  className={`flex flex-col items-center min-w-[56px] transition-opacity ${
                    activeFilter === option.id
                      ? 'opacity-100 border-b-2 border-neutral-800 pb-2'
                      : 'opacity-60 hover:opacity-100 pb-4'
                  }`}
                >
                  <Icon size={24} className="mb-1" />
                  <span className="text-xs whitespace-nowrap">{option.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;