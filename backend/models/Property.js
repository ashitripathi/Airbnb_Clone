import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

const Property = sequelize.define('Property', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  type: DataTypes.STRING,
  location: DataTypes.STRING,
  price: DataTypes.FLOAT,
  images: DataTypes.ARRAY(DataTypes.STRING),
  bedrooms: DataTypes.INTEGER,
  beds: DataTypes.INTEGER,
  bathrooms: DataTypes.INTEGER,
  maxGuests: DataTypes.INTEGER,
  amenities: DataTypes.ARRAY(DataTypes.STRING),
  rating: DataTypes.FLOAT,
  isBooked: DataTypes.BOOLEAN,
}, {
  timestamps: true
});

export default Property;
