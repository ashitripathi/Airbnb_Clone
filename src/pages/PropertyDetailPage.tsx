import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, User, Calendar, Star, Award, Wifi, Tv, Twitch as Kitchen, Car, Snowflake } from 'lucide-react';
import { getPropertyById } from '../services/propertyService';
import { Property } from '../types/property';
import ImageGallery from '../components/common/ImageGallery';
import BookingWidget from '../components/booking/BookingWidget';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        if (!id) return;
        
        setLoading(true);
        const data = await getPropertyById(id);
        setProperty(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load property details');
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="container-custom py-12">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="container-custom py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error || 'Property not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <div className="container-custom pt-6">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">{property.title}</h1>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
          <div className="flex items-center">
            <Star size={18} className="text-primary-500 mr-1" />
            <span className="font-medium">{property.rating}</span>
            <span className="mx-1">·</span>
            <span className="text-neutral-600 underline">
              {property.reviews.length} reviews
            </span>
          </div>
          
          <div className="flex items-center">
            <Award size={18} className="text-neutral-600 mr-1" />
            <span className="text-neutral-600">Superhost</span>
          </div>
          
          <div className="flex items-center">
            <MapPin size={18} className="text-neutral-600 mr-1" />
            <span className="text-neutral-600 underline">{property.location}</span>
          </div>
        </div>
        
        <ImageGallery images={property.images} title={property.title} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="border-b border-neutral-200 pb-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    {property.type === 'apartment' ? 'Entire apartment' : 'Entire home'} hosted by {property.host.name}
                  </h2>
                  <p className="text-neutral-600 mt-1">
                    {property.bedrooms} bedroom{property.bedrooms !== 1 ? 's' : ''} · {property.beds} bed{property.beds !== 1 ? 's' : ''} · {property.bathrooms} bathroom{property.bathrooms !== 1 ? 's' : ''}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="rounded-full overflow-hidden w-14 h-14 border border-neutral-200">
                    <img 
                      src={property.host.avatar} 
                      alt={property.host.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="py-6 border-b border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex">
                  <div className="mr-4 text-neutral-600">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Self check-in</h3>
                    <p className="text-neutral-600 text-sm mt-1">
                      Check yourself in with the keypad
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-neutral-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Great location</h3>
                    <p className="text-neutral-600 text-sm mt-1">
                      95% of guests gave a 5-star rating
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-neutral-600">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Free cancellation</h3>
                    <p className="text-neutral-600 text-sm mt-1">
                      Cancel before check-in
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="py-6 border-b border-neutral-200">
              <h2 className="text-xl font-semibold mb-4">About this place</h2>
              <p className="text-neutral-700 leading-relaxed">
                {property.description}
              </p>
            </div>
            
            <div className="py-6 border-b border-neutral-200">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => {
                  let Icon;
                  
                  switch(amenity.toLowerCase()) {
                    case 'wifi':
                      Icon = Wifi;
                      break;
                    case 'tv':
                      Icon = Tv;
                      break;
                    case 'kitchen':
                      Icon = Kitchen;
                      break;
                    case 'parking':
                      Icon = Car;
                      break;
                    case 'air conditioning':
                      Icon = Snowflake;
                      break;
                    default:
                      Icon = Award;
                  }
                  
                  return (
                    <div key={index} className="flex items-center">
                      <Icon size={20} className="text-neutral-600 mr-3" />
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="py-6">
              <div className="flex items-center mb-6">
                <Star size={20} className="text-primary-500 mr-2" />
                <span className="text-xl font-semibold">{property.rating}</span>
                <span className="mx-2">·</span>
                <span className="text-xl font-semibold">{property.reviews.length} reviews</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.reviews.slice(0, 4).map((review, index) => (
                  <div key={index} className="pb-4">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full overflow-hidden w-10 h-10 mr-3">
                        <img 
                          src={review.user.avatar} 
                          alt={review.user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{review.user.name}</div>
                        <div className="text-neutral-500 text-sm">
                          {new Date(review.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                    <p className="text-neutral-700">{review.text}</p>
                  </div>
                ))}
              </div>
              
              {property.reviews.length > 4 && (
                <button className="mt-6 btn btn-outline">
                  Show all {property.reviews.length} reviews
                </button>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <BookingWidget
                propertyId={property._id}
                price={property.price}
                rating={property.rating}
                reviewCount={property.reviews.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;