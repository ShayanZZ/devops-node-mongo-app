// routes/auth.js
const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const path = require('path');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.redirect('/signup?error=Email+already+in+use');
    }
    const user = new User({ email, password });
    await user.save();
    res.redirect('/success.html');
  } catch (error) {
    res.redirect('/signup?error=Signup+failed');
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.redirect('/signin?error=Invalid+email+or+password');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.redirect('/success.html');
  } catch (error) {
    res.redirect('/signin?error=Sign+in+failed');
  }
});

module.exports = router;
