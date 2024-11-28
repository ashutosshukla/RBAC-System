const express = require('express');
const router = express.Router();
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

router.get('/dashboard', 
  [authMiddleware, roleMiddleware(['user', 'admin', 'moderator'])], 
  (req, res) => {
    res.json({ 
      message: 'Welcome to User Dashboard', 
      user: req.user 
    });
  }
);

module.exports = router;