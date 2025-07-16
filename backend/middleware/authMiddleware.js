import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const protect = async (req, res, next) => {
  const User = mongoose.model('User');
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Not authorized, user not found' });
      }

      next();
    } catch (error) {
      console.error('Auth Middleware Error:', error.message);
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
      }
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ success: false, message: 'Not authorized, token expired' });
      }
      return res.status(401).json({ success: false, message: 'Not authorized, token invalid' });
    }
  }

  if (!token) {
    res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }
};

export { protect };
