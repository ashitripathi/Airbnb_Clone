import React, { useState } from 'react';
import { User, Settings, Lock, CreditCard, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <p>Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-2xl font-semibold mb-8">Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <div className="p-6 bg-primary-500 text-white">
              <div className="flex items-center">
                <div className="rounded-full bg-white p-1 mr-3">
                  <User size={24} className="text-primary-500" />
                </div>
                <div>
                  <h2 className="font-medium">{user.name}</h2>
                  <p className="text-sm opacity-90">{user.email}</p>
                </div>
              </div>
            </div>
            
            <nav className="py-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center w-full px-6 py-3 text-left ${
                  activeTab === 'profile' 
                    ? 'bg-neutral-100 text-primary-500 border-l-4 border-primary-500' 
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <User size={18} className="mr-3" />
                <span>Personal Info</span>
              </button>
              
              <button
                onClick={() => setActiveTab('security')}
                className={`flex items-center w-full px-6 py-3 text-left ${
                  activeTab === 'security' 
                    ? 'bg-neutral-100 text-primary-500 border-l-4 border-primary-500' 
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <Lock size={18} className="mr-3" />
                <span>Login & Security</span>
              </button>
              
              <button
                onClick={() => setActiveTab('payments')}
                className={`flex items-center w-full px-6 py-3 text-left ${
                  activeTab === 'payments' 
                    ? 'bg-neutral-100 text-primary-500 border-l-4 border-primary-500' 
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <CreditCard size={18} className="mr-3" />
                <span>Payments & Payouts</span>
              </button>
              
              <button
                onClick={() => setActiveTab('preferences')}
                className={`flex items-center w-full px-6 py-3 text-left ${
                  activeTab === 'preferences' 
                    ? 'bg-neutral-100 text-primary-500 border-l-4 border-primary-500' 
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <Settings size={18} className="mr-3" />
                <span>Preferences</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-6 py-3 text-left text-red-600 hover:bg-neutral-50"
              >
                <LogOut size={18} className="mr-3" />
                <span>Log Out</span>
              </button>
            </nav>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <div className="bg-white shadow rounded-xl p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="Add a phone number"
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Add your address"
                      className="input mb-2"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="City"
                        className="input"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        className="input"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <input
                        type="text"
                        placeholder="Zip code"
                        className="input"
                      />
                      <input
                        type="text"
                        placeholder="Country"
                        className="input"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Login & Security</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-medium mb-2">Password</h3>
                    <p className="text-neutral-600 text-sm mb-3">
                      Last updated 3 months ago
                    </p>
                    <button className="text-primary-600 font-medium text-sm">
                      Update password
                    </button>
                  </div>
                  
                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-medium mb-2">Two-factor authentication</h3>
                    <p className="text-neutral-600 text-sm mb-3">
                      Add an extra layer of security to your account
                    </p>
                    <button className="text-primary-600 font-medium text-sm">
                      Set up two-factor authentication
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Account activity</h3>
                    <p className="text-neutral-600 text-sm mb-3">
                      See where you're logged in and log out if needed
                    </p>
                    <button className="text-primary-600 font-medium text-sm">
                      View activity
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'payments' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Payments & Payouts</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-medium mb-4">Payment methods</h3>
                    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="text-neutral-500">
                        No payment methods added yet
                      </div>
                      <button className="text-primary-600 font-medium text-sm">
                        Add payment method
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Payout methods</h3>
                    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="text-neutral-500">
                        No payout methods added yet
                      </div>
                      <button className="text-primary-600 font-medium text-sm">
                        Add payout method
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'preferences' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Preferences</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-medium mb-4">Language and currency</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Language
                        </label>
                        <select className="input">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                          <option>Italian</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Currency
                        </label>
                        <select className="input">
                          <option>USD - US Dollar</option>
                          <option>EUR - Euro</option>
                          <option>GBP - British Pound</option>
                          <option>CAD - Canadian Dollar</option>
                          <option>AUD - Australian Dollar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-medium mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Email notifications for bookings</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Email notifications for messages</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Email notifications for promotions and news</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Privacy</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Share my booking history with hosts</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Use my data to improve services</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="btn btn-primary">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;