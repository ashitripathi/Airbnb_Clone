import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [activeTab, setActiveTab] = useState('location');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (checkIn) params.append('checkIn', checkIn);
    if (checkOut) params.append('checkOut', checkOut);
    if (guests) params.append('guests', guests);
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-xl">
      <form 
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row bg-white border border-neutral-200 rounded-full shadow-sm hover:shadow-md transition p-1"
      >
        <button 
          type="button"
          onClick={() => setActiveTab('location')}
          className={`flex-1 py-2 px-4 rounded-full text-left ${activeTab === 'location' ? 'bg-neutral-100' : ''}`}
        >
          <div className="text-xs font-bold text-neutral-800">Where</div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search destinations"
            className="w-full bg-transparent border-none outline-none text-sm"
          />
        </button>
        
        <span className="hidden md:block border-r border-neutral-300 h-8 self-center"></span>
        
        <button
          type="button" 
          onClick={() => setActiveTab('checkIn')}
          className={`flex-1 py-2 px-4 rounded-full text-left ${activeTab === 'checkIn' ? 'bg-neutral-100' : ''}`}
        >
          <div className="text-xs font-bold text-neutral-800">Check in</div>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-sm"
          />
        </button>
        
        <span className="hidden md:block border-r border-neutral-300 h-8 self-center"></span>
        
        <button
          type="button" 
          onClick={() => setActiveTab('checkOut')}
          className={`flex-1 py-2 px-4 rounded-full text-left ${activeTab === 'checkOut' ? 'bg-neutral-100' : ''}`}
        >
          <div className="text-xs font-bold text-neutral-800">Check out</div>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-sm"
          />
        </button>
        
        <span className="hidden md:block border-r border-neutral-300 h-8 self-center"></span>
        
        <div className="flex-1 flex items-center">
          <button
            type="button" 
            onClick={() => setActiveTab('guests')}
            className={`flex-1 py-2 px-4 rounded-full text-left ${activeTab === 'guests' ? 'bg-neutral-100' : ''}`}
          >
            <div className="text-xs font-bold text-neutral-800">Who</div>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Add guests"
              className="w-full bg-transparent border-none outline-none text-sm"
            />
          </button>
          
          <button 
            type="submit" 
            className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-600 transition ml-2"
          >
            <Search size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;