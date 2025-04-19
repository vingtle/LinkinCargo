// routes/newsletter.js
const express = require('express');
const router = express.Router();
const newsletterController = require('../controller/newsletterController');

// POST route for subscribing
router.post('/', newsletterController.subscribeNewsletter);

// PUT route for updating a subscriber's email by ID
router.put('/:id', newsletterController.updateNewsletter);

module.exports = router;
