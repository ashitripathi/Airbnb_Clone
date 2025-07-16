import { GlobeIcon, Menu, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import SearchBar from '../search/SearchBar';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMenu && !(event.target as Element).closest('.user-menu')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? 'bg-white shadow-header-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="py-4 container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="mr-2 text-primary-500">
                <svg width="30" height="32" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.62l-.28.023-.253.005c-4.157 0-6.345-2.806-6.345-6.504 0-1.793.44-3.467 1.433-5.584l.152-.347c1.706-3.849 5.69-11.994 7.651-15.894a7.711 7.711 0 0 1 .814-1.392C11.498 1.056 13.123 1 15.086 1a9.803 9.803 0 0 1 .585 0H16Z" />
                </svg>
              </div>
              <span className="hidden text-xl font-bold text-primary-500 md:block">book & rent</span>
            </Link>
          </div>

          <div className="justify-center flex-1 hidden md:flex">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/properties" className="hidden px-4 py-2 transition rounded-full md:block hover:bg-neutral-100">
              <span className="text-sm font-medium">Explore</span>
            </Link>
            
            <button className="items-center hidden px-3 py-2 transition rounded-full md:flex hover:bg-neutral-100">
              <GlobeIcon size={16} className="mr-1" />
              <span className="text-sm">English (US)</span>
            </button>

            <div className="relative user-menu">
              <button 
                className="flex items-center p-2 transition border rounded-full border-neutral-300 hover:shadow-md"
                onClick={() => setShowMenu(!showMenu)}
              >
                <Menu size={16} className="mr-2" />
                <User size={16} className="text-neutral-600" />
              </button>

              {showMenu && (
                <div className="absolute right-0 w-64 py-2 mt-2 bg-white rounded-xl shadow-card fade-in">
                  {!user ? (
                    <>
                      <Link 
                        to="/login" 
                        className="block px-4 py-3 font-medium hover:bg-neutral-100"
                      >
                        Log in
                      </Link>
                      <Link 
                        to="/register" 
                        className="block px-4 py-3 hover:bg-neutral-100"
                      >
                        Sign up
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="px-4 py-2 text-sm border-b text-neutral-500 border-neutral-200">
                        Signed in as <span className="font-medium">{user.name}</span>
                      </div>
                      <Link 
                        to="/profile" 
                        className="block px-4 py-3 hover:bg-neutral-100"
                      >
                        Profile
                      </Link>
                      <Link 
                        to="/bookings" 
                        className="block px-4 py-3 hover:bg-neutral-100"
                      >
                        Bookings
                      </Link>
                      {user.isHost && (
                        <Link 
                          to="/host/listings" 
                          className="block px-4 py-3 hover:bg-neutral-100"
                        >
                          Manage Listings
                        </Link>
                      )}
                      <button 
                        onClick={handleLogout}
                        className="block w-full px-4 py-3 text-left hover:bg-neutral-100 text-primary-600"
                      >
                        Log out
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 md:hidden">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;