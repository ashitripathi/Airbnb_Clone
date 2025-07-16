import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, XCircle, ChevronRight } from 'lucide-react';

const mockBookings = [
  {
    id: '1',
    property: {
      _id: '1',
      title: 'Luxury Beach Villa with Infinity Pool',
      location: 'Malibu, California',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    checkIn: '2025-02-15',
    checkOut: '2025-02-20',
    guests: 4,
    totalPrice: 1750,
    status: 'upcoming'
  },
  {
    id: '2',
    property: {
      _id: '3',
      title: 'Charming Mountain Cabin with Hot Tub',
      location: 'Aspen, Colorado',
      image: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    checkIn: '2025-03-10',
    checkOut: '2025-03-15',
    guests: 2,
    totalPrice: 1125,
    status: 'upcoming'
  },
  {
    id: '3',
    property: {
      _id: '4',
      title: 'Beachfront Condo with Spectacular Ocean Views',
      location: 'Miami Beach, Florida',
      image: 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    checkIn: '2024-10-05',
    checkOut: '2024-10-10',
    guests: 3,
    totalPrice: 975,
    status: 'completed'
  }
];

const BookingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const getFilteredBookings = () => {
    return mockBookings.filter(booking => booking.status === activeTab);
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="container-custom py-12">
      <h1 className="text-2xl font-semibold mb-8">Your Bookings</h1>
      
      <div className="border-b border-neutral-200 mb-6">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-4 px-2 font-medium ${
              activeTab === 'upcoming'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`pb-4 px-2 font-medium ${
              activeTab === 'completed'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('canceled')}
            className={`pb-4 px-2 font-medium ${
              activeTab === 'canceled'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Canceled
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        {getFilteredBookings().length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-neutral-100 rounded-full mb-4">
              <Calendar size={24} className="text-neutral-500" />
            </div>
            <h3 className="text-lg font-medium">No {activeTab} bookings</h3>
            <p className="text-neutral-500 mt-2">
              You don't have any {activeTab} bookings at the moment.
            </p>
            <Link to="/properties" className="btn btn-primary mt-6">
              Explore properties
            </Link>
          </div>
        ) : (
          getFilteredBookings().map(booking => (
            <div key={booking.id} className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-1">
                  <div className="h-full">
                    <img
                      src={booking.property.image}
                      alt={booking.property.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-3 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium mb-1">
                        {booking.property.title}
                      </h3>
                      <p className="text-neutral-600 mb-3">
                        {booking.property.location}
                      </p>
                    </div>
                    
                    <div>
                      {activeTab === 'upcoming' && (
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          <CheckCircle size={12} className="mr-1" />
                          Confirmed
                        </span>
                      )}
                      {activeTab === 'completed' && (
                        <span className="inline-flex items-center bg-neutral-100 text-neutral-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          <CheckCircle size={12} className="mr-1" />
                          Completed
                        </span>
                      )}
                      {activeTab === 'canceled' && (
                        <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          <XCircle size={12} className="mr-1" />
                          Canceled
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-y-3 mb-4">
                    <div className="w-full sm:w-1/2">
                      <div className="text-sm text-neutral-500">Check-in</div>
                      <div className="font-medium">{formatDate(booking.checkIn)}</div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="text-sm text-neutral-500">Check-out</div>
                      <div className="font-medium">{formatDate(booking.checkOut)}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-y-3 mb-4">
                    <div className="w-full sm:w-1/2">
                      <div className="text-sm text-neutral-500">Guests</div>
                      <div className="font-medium">{booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}</div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="text-sm text-neutral-500">Total price</div>
                      <div className="font-medium">${booking.totalPrice}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      to={`/properties/${booking.property._id}`}
                      className="text-primary-600 font-medium text-sm flex items-center hover:text-primary-700"
                    >
                      View property
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                    
                    {activeTab === 'upcoming' && (
                      <>
                        <button className="text-neutral-600 font-medium text-sm flex items-center hover:text-neutral-900">
                          Message host
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                        <button className="text-red-600 font-medium text-sm flex items-center hover:text-red-700">
                          Cancel booking
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                      </>
                    )}
                    
                    {activeTab === 'completed' && (
                      <button className="text-neutral-600 font-medium text-sm flex items-center hover:text-neutral-900">
                        Write a review
                        <ChevronRight size={16} className="ml-1" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingsPage;