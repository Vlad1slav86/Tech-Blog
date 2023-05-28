const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    // Check if user exists and password matches
    if (user && bcrypt.compareSync(password, user.password)) {
      // Set the user id in the session
      req.session.userId = user.id;
      res.redirect('/dashboard'); // Redirect to the dashboard or any other route
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(409).json({ message: 'User already exists' });
      return;
    }

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    // Set the user id in the session
    req.session.userId = newUser.id;
    res.redirect('/dashboard'); // Redirect to the dashboard or any other route
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Logout route
router.get('/logout', (req, res) => {
  // Destroy the session and redirect to the login page
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/login');
  });
});

module.exports = router;
