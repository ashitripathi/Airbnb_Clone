import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Property } from '../../types/property';
import { formatDistance } from 'date-fns';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formattedDate = formatDistance(new Date(property.availableFrom), new Date(), { addSuffix: true });

  return (
    <div className="card group">
      <Link to={`/properties/${property._id}`} className="block">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <button 
            className="absolute top-3 right-3 p-1.5 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-colors"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Heart size={20} className="text-neutral-600" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-neutral-900 text-base">
              {property.title}
            </h3>
            <div className="flex items-center ml-2">
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" 
                style={{ height: '12px', width: '12px', fill: 'currentcolor' }}>
                <path fillRule="evenodd" d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
              </svg>
              <span className="ml-1 text-sm">{property.rating}</span>
            </div>
          </div>

          <p className="text-neutral-500 text-sm mt-1">
            {property.location}
          </p>
          <p className="text-neutral-500 text-sm mt-1">
            Available {formattedDate}
          </p>
          <p className="font-semibold mt-3 text-neutral-900">
            ${property.price} <span className="font-normal">night</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;