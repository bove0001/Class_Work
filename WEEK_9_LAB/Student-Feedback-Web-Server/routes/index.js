const express = require('express');      // Import Express framework
const messageSorter = require('../services/message_sorting')
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

  let message = formData.comments

  messageSorter(message).then(departmentList => {

    if (departmentList === 0) {
      departmentList=['General college feedback']
    }

    console.log('Departments to contact:', departmentList)

    return res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        message: formData.comments,
        currentStudent: formData['current-student'],
        departmentList: departmentList
    })
  })


  // Pass the fields your thank_you.hbs expects
  res.render('thank_you', formData);   // Render thank you page
});

module.exports = router;  // Export router for app use