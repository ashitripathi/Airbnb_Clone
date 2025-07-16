import React, { useState, useEffect } from 'react';
import PropertyFilters from '../components/property/PropertyFilters';
import PropertyCard from '../components/property/PropertyCard';
import { getProperties } from '../services/propertyService';
import { Property } from '../types/property';
import { BookOpen, Globe } from 'lucide-react';

const HomePage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data);
        setFilteredProperties(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);

    // Apply the filter
    if (filter === 'all') {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(property => property.type === filter);
      setFilteredProperties(filtered);
    }
  };

  return (
    <div className="pb-12">
      <div className="relative h-[70vh] bg-gradient-to-b from-neutral-800 to-neutral-900 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&w=1500" 
            alt="Modern living room"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative container-custom text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find your place in the world
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Discover unique stays, vacation rentals, and experiences around the globe
          </p>
          <button className="btn btn-primary px-8 py-3 text-lg">
            Explore
          </button>
        </div>
      </div>

      <PropertyFilters onFilterChange={handleFilterChange} />

      <div className="container-custom py-8">
        <h2 className="text-2xl font-semibold mb-6">Discover places to stay</h2>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-500 text-lg">No properties found for this filter.</p>
            <button 
              onClick={() => handleFilterChange('all')}
              className="mt-4 btn btn-outline"
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
      
      <div className="bg-neutral-50 py-16 mt-12">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold mb-8">Travel Inspiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover-scale">
              <div className="aspect-w-3 aspect-h-2 rounded-t-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Beach destination"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Beach Getaways</h3>
                <p className="text-neutral-600 mb-3">
                  Find the perfect beachfront property for your next vacation.
                </p>
                <a href="#" className="text-primary-600 font-medium flex items-center">
                  Explore beaches <span className="ml-1">→</span>
                </a>
              </div>
            </div>
            
            <div className="card hover-scale">
              <div className="aspect-w-3 aspect-h-2 rounded-t-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Mountain cabin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Mountain Retreats</h3>
                <p className="text-neutral-600 mb-3">
                  Cozy cabins and chalets perfect for a scenic mountain escape.
                </p>
                <a href="#" className="text-primary-600 font-medium flex items-center">
                  Discover mountains <span className="ml-1">→</span>
                </a>
              </div>
            </div>
            
            <div className="card hover-scale">
              <div className="aspect-w-3 aspect-h-2 rounded-t-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2227960/pexels-photo-2227960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="City apartment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">City Adventures</h3>
                <p className="text-neutral-600 mb-3">
                  Modern apartments in vibrant city centers around the world.
                </p>
                <a href="#" className="text-primary-600 font-medium flex items-center">
                  Explore cities <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Host your home"
              className="w-full h-full object-cover mix-blend-overlay opacity-40"
            />
          </div>
          <div className="relative py-16 px-8 md:px-16 flex flex-col md:flex-row items-center text-white">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Host</h2>
              <p className="text-lg md:text-xl mb-6 max-w-xl">
                Turn your extra space into extra income. Host on Airbnb and start earning.
              </p>
              <button className="bg-white text-primary-600 font-medium px-8 py-3 rounded-lg hover:bg-neutral-100 transition">
                Learn more
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">$1,200</div>
                <div className="text-lg">Average monthly host earnings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Popular Experiences</h2>
          <a href="#" className="text-primary-600 font-medium flex items-center">
            See all <span className="ml-1">→</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card hover-scale">
            <div className="aspect-w-1 aspect-h-1 rounded-t-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cooking class"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-1">
                <BookOpen size={16} className="text-neutral-600 mr-1" />
                <span className="text-sm text-neutral-600">Workshop</span>
              </div>
              <h3 className="font-medium">Italian Pasta Making</h3>
              <p className="text-sm text-neutral-600 mt-1">From $89 / person</p>
            </div>
          </div>
          
          <div className="card hover-scale">
            <div className="aspect-w-1 aspect-h-1 rounded-t-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Helicopter tour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-1">
                <Globe size={16} className="text-neutral-600 mr-1" />
                <span className="text-sm text-neutral-600">Tour</span>
              </div>
              <h3 className="font-medium">Helicopter City Tour</h3>
              <p className="text-sm text-neutral-600 mt-1">From $199 / person</p>
            </div>
          </div>
          
          <div className="card hover-scale">
            <div className="aspect-w-1 aspect-h-1 rounded-t-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Wine tasting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-1">
                <BookOpen size={16} className="text-neutral-600 mr-1" />
                <span className="text-sm text-neutral-600">Tasting</span>
              </div>
              <h3 className="font-medium">Wine Country Experience</h3>
              <p className="text-sm text-neutral-600 mt-1">From $129 / person</p>
            </div>
          </div>
          
          <div className="card hover-scale">
            <div className="aspect-w-1 aspect-h-1 rounded-t-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Yoga retreat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-1">
                <BookOpen size={16} className="text-neutral-600 mr-1" />
                <span className="text-sm text-neutral-600">Wellness</span>
              </div>
              <h3 className="font-medium">Sunrise Yoga Retreat</h3>
              <p className="text-sm text-neutral-600 mt-1">From $49 / person</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;