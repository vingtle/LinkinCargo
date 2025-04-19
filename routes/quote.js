const express = require('express');
const router = express.Router();
const quoteController = require('../controller/quoteController');

// POST route to handle quote requests
router.post('/', quoteController.submitQuoteRequest);

module.exports = router;
