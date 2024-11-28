const express = require('express');
const router = express.Router();
const User = require('../models/User.js')
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

router.get('/dashboard', 
  [authMiddleware, roleMiddleware(['admin'])], 
  (req, res) => {
    res.json({ 
      message: 'Welcome to Admin Dashboard', 
      user: req.user 
    });
  }
);

router.get('/users', 
    [authMiddleware, roleMiddleware(['admin'])], 
    async (req, res) => {
      try {
        const users = await User.find().select('-password');
        console.log("data before sending",users);
        
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
        console.log(error);
        
      }
    }
  );
  
  module.exports = router;