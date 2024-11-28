const express = require('express');
const router = express.Router();
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

router.get('/dashboard', 
  [authMiddleware, roleMiddleware(['moderator', 'admin'])], 
  (req, res) => {
    res.json({ 
      message: 'Welcome to Moderator Dashboard', 
      user: req.user 
    });
  }
);

module.exports = router;