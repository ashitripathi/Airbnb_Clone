import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyFilters from '../components/property/PropertyFilters';
import PropertyCard from '../components/property/PropertyCard';
import { getProperties } from '../services/propertyService';
import { Property } from '../types/property';
import { SlidersHorizontal, MapPin } from 'lucide-react';

const PropertyListingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const locationParam = searchParams.get('location');
  const checkInParam = searchParams.get('checkIn');
  const checkOutParam = searchParams.get('checkOut');
  const guestsParam = searchParams.get('guests');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await getProperties();
        setProperties(data);
        
        let filtered = [...data];
        
        if (locationParam) {
          filtered = filtered.filter(property => 
            property.location.toLowerCase().includes(locationParam.toLowerCase())
          );
        }
        
        setFilteredProperties(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [locationParam, checkInParam, checkOutParam, guestsParam]);

  const handleFilterChange = (filter: string) => {
    if (filter === 'all') {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(property => property.type === filter);
      setFilteredProperties(filtered);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="pb-16">
      <PropertyFilters onFilterChange={handleFilterChange} />
      
      <div className="container-custom py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">
            {locationParam 
              ? `Places to stay in ${locationParam}`
              : 'All properties'
            }
          </h1>
          
          <button 
            onClick={toggleFilters}
            className="flex items-center px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition"
          >
            <SlidersHorizontal size={16} className="mr-2" />
            Filters
          </button>
        </div>
        
        {showFilters && (
          <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-md">
            <h3 className="font-semibold text-lg mb-4">Filter Properties</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Price Range
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="number" 
                      placeholder="Min" 
                      className="input"
                    />
                  </div>
                  <div>
                    <input 
                      type="number" 
                      placeholder="Max" 
                      className="input"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Rooms & Beds
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select className="input">
                      <option>Any bedrooms</option>
                      <option>1+ bedroom</option>
                      <option>2+ bedrooms</option>
                      <option>3+ bedrooms</option>
                      <option>4+ bedrooms</option>
                    </select>
                  </div>
                  <div>
                    <select className="input">
                      <option>Any beds</option>
                      <option>1+ bed</option>
                      <option>2+ beds</option>
                      <option>3+ beds</option>
                      <option>4+ beds</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Property Type
                </label>
                <select className="input">
                  <option>Any type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Guest house</option>
                  <option>Hotel</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Amenities
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Wi-Fi</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Kitchen</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Pool</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6 space-x-4">
              <button 
                className="btn btn-outline"
                onClick={() => setShowFilters(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary">
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        {locationParam && (
          <div className="flex items-center mb-6 text-neutral-600">
            <MapPin size={18} className="mr-1" />
            <span>
              {checkInParam && checkOutParam
                ? `${locationParam} · ${new Date(checkInParam).toLocaleDateString()} to ${new Date(checkOutParam).toLocaleDateString()}`
                : locationParam
              }
              {guestsParam && ` · ${guestsParam} guest${parseInt(guestsParam) !== 1 ? 's' : ''}`}
            </span>
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No results found</h3>
            <p className="text-neutral-500 mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button 
              onClick={() => handleFilterChange('all')}
              className="btn btn-outline"
            >
              View all properties
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListingPage;