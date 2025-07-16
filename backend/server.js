import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(process.env.PG_URI);

sequelize.authenticate()
  .then(() => console.log('PostgreSQL connected successfully'))
  .catch(err => console.error('Unable to connect to PostgreSQL:', err));

import User from './models/User.js';
import Property from './models/Property.js';
import Booking from './models/Booking.js';

import { protect } from './middleware/authMiddleware.js';

app.get('/', (req, res) => {
  res.send('Airbnb Clone API is running');
});

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email, isHost: user.isHost }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

app.post('/api/users/register', async (req, res) => {
  const { name, email, password, isHost } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      isHost: isHost || false
    });

    const token = generateToken(user);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        isHost: user.isHost
      }
    });
  } catch (error) {
    console.error('Register Error:', error.message);
    res.status(500).json({ success: false, message: 'Server error during registration', error: error.message });
  }
});

app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      token,
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        isHost: user.isHost
      }
    });
  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ success: false, message: 'Server error during login', error: error.message });
  }
});

app.get('/api/properties', async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error: error.message });
  }
});

app.get('/api/properties/:id', async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching property', error: error.message });
  }
});

app.post('/api/properties', protect, async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: 'Error creating property', error: error.message });
  }
});

app.put('/api/properties/:id', protect, async (req, res) => {
  try {
    const updatedProperty = await Property.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true
    });
    if (!updatedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(updatedProperty[1]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating property', error: error.message });
  }
});

app.delete('/api/properties/:id', protect, async (req, res) => {
  try {
    const deletedProperty = await Property.destroy({ where: { id: req.params.id } });
    if (!deletedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting property', error: error.message });
  }
});

app.post('/api/bookings', protect, async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});