const express = require('express');     // Import Express framework
const router = express.Router();        // Create a router object
const randomWYRQuestion = require('../model/wyr_questions')        // Import question generator

router.get('/', function(req, res, next) {          // Handle root GET request
  res.send('Welcome to the Would You Rather API!'); // Send a welcome message
});

/* GET home page. */
router.get('/wyr', function(req, res, next) {       // Handle /wyr GET request
  const wyr = randomWYRQuestion();                  // Get a random question
  res.json(wyr);                                    // Return question as JSON
})

module.exports = router;                            // Export router for app use
