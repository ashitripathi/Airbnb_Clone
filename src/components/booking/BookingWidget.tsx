import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface BookingWidgetProps {
  propertyId: string;
  price: number;
  rating: number;
  reviewCount: number;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ 
  propertyId, 
  price, 
  rating, 
  reviewCount 
}) => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const nights = checkIn && checkOut 
    ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) 
    : 0;
  
  const subtotal = price * nights;
  
  const cleaningFee = price * 0.15;
  
  const serviceFee = subtotal * 0.12;
  
  const total = subtotal + cleaningFee + serviceFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (!checkIn || !checkOut) {
      return;
    }
    
    try {
      setIsLoading(true);
      
      setTimeout(() => {
        alert('Booking created successfully!');
        navigate('/bookings');
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      setIsLoading(false);
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div className="border border-neutral-200 rounded-xl shadow-card p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="font-semibold text-xl">${price}</span>
          <span className="text-neutral-600"> night</span>
        </div>
        <div className="flex items-center">
          <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" 
            style={{ height: '14px', width: '14px', fill: 'currentcolor' }}>
            <path fillRule="evenodd" d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
          </svg>
          <span className="ml-1 text-sm font-medium">{rating}</span>
          <span className="mx-1 text-neutral-300">·</span>
          <span className="text-sm text-neutral-600 underline">
            {reviewCount} reviews
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="border border-neutral-300 rounded-t-lg overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-neutral-300">
            <div className="p-3">
              <label className="block text-xs font-bold mb-1">CHECK-IN</label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                minDate={new Date()}
                placeholderText="Add date"
                className="w-full bg-transparent border-none p-0 text-sm focus:outline-none"
              />
            </div>
            <div className="p-3">
              <label className="block text-xs font-bold mb-1">CHECKOUT</label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
                minDate={checkIn || new Date()}
                placeholderText="Add date"
                className="w-full bg-transparent border-none p-0 text-sm focus:outline-none"
              />
            </div>
          </div>
          
          <div className="border-t border-neutral-300 p-3">
            <label className="block text-xs font-bold mb-1">GUESTS</label>
            <select
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full bg-transparent border-none p-0 text-sm focus:outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <button 
          type="submit"
          disabled={!checkIn || !checkOut || isLoading}
          className={`w-full py-3 mt-4 rounded-lg font-medium ${
            !checkIn || !checkOut
              ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
              : 'bg-primary-500 text-white hover:bg-primary-600'
          }`}
        >
          {isLoading ? 'Loading...' : 'Reserve'}
        </button>
      </form>
      
      {nights > 0 && (
        <div className="mt-6 space-y-4">
          <div className="flex justify-between text-sm">
            <div className="underline">${price} x {nights} nights</div>
            <div>${subtotal}</div>
          </div>
          <div className="flex justify-between text-sm">
            <div className="underline">Cleaning fee</div>
            <div>${cleaningFee.toFixed(2)}</div>
          </div>
          <div className="flex justify-between text-sm">
            <div className="underline">Service fee</div>
            <div>${serviceFee.toFixed(2)}</div>
          </div>
          <div className="pt-4 border-t border-neutral-300">
            <div className="flex justify-between font-semibold">
              <div>Total before taxes</div>
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingWidget;