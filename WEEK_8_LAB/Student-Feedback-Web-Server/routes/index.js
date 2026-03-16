const express = require('express');      // Import Express framework
const router = express.Router();    // Create a router object

router.get('/', (req, res) => {   // Render the index view                // Handle home page request
  res.render('index', {
    title: 'Feedback Application',
    author: 'Joe Bove',
    timePageLoadedAt: new Date()
  });
});

router.get('/feedback-form', (req, res) => {        // Handle form page request
  res.render('student_feedback_form');   // Render feedback form view
});

// handle the POST from your form
router.post('/submit-feedback', (req, res) => {     // Handle form submit POST
  const formData = req.body;    // Read posted form data
  console.log(formData);

  // Pass the fields your thank_you.hbs expects
  res.render('thank_you', formData);   // Render thank you page
});

module.exports = router;  // Export router for app use