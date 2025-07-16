import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

const Booking = sequelize.define('Booking', {
  checkIn: {
    type: DataTypes.DATE,
    allowNull: false
  },
  checkOut: {
    type: DataTypes.DATE,
    allowNull: false
  },
  guests: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
    defaultValue: 'pending'
  }
}, {
  timestamps: true
});

export default Booking;
