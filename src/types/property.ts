export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Host {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  isSuperhost: boolean;
  responseRate: number;
  responseTime: string;
  joinedDate: string;
}

export interface Review {
  _id: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
  rating: number;
  text: string;
  date: string;
}

export interface Property {
  _id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  price: number;
  images: string[];
  bedrooms: number;
  beds: number;
  bathrooms: number;
  maxGuests: number;
  amenities: string[];
  rating: number;
  reviews: Review[];
  host: Host;
  availableFrom: string;
  availableTo: string;
  isBooked: boolean;
}