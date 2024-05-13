// routes/index.js
const express = require('express');
const authRoutes = require('./auth.routes');

const router = express.Router();

// Add all route handlers here
router.use('/auth', authRoutes);

module.exports = router;
