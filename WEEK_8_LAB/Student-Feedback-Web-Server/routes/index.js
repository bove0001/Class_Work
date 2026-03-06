const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Feedback Application',
    author: 'Joe Bove',
    timePageLoadedAt: new Date()
  });
});

router.get('/feedback-form', (req, res) => {
  res.render('student_feedback_form');
});

// ✅ handle the POST from your form
router.post('/submit-feedback', (req, res) => {
  const formData = req.body;   // ✅ POST body
  console.log(formData);

  // Pass the fields your thank_you.hbs expects
  res.render('thank_you', formData);
});

module.exports = router;