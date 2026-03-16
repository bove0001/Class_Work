// Import the Express framework (web server library)
const express = require('express')

// Create an "Express Router" object
const router = express.Router()

// 
//  GET /
//  This handles request to home page.
//  res.render('home') means:
//    - Use the view engine (HBS) to find a template named "home"
//    - Render it into HTML and send it back to the browser

router.get('/', function(req, res) {
    res.render('home')
})

//  GET /calculate
//  This handles the BMI calculation after the user submits a form.

//  This is a GET route, so it expects form data in the URL
//  like /calculate?height=1.8&weight=80


router.get('/calculate', function(req, res) {

    // req.query is an object containing all query-string fields { height, weight }
    const formData = req.query

    // Helpful for debugging
    console.log('Form data received:', formData)

    // Convert string inputs to real numbers.
    // parseFloat handles decimals ("1.8") and returns a Number.
    // If enters something invalid, parseFloat returns not a number.
    const height = parseFloat(formData.height)
    const weight = parseFloat(formData.weight)
    const bmi = (weight / (height * height)).toFixed(2);

    let classification = 'fat'

    // Standard BMI categories
    if (bmi < 18.5) {
        classification = 'underweight'
    } else if (bmi < 25) {
        classification = 'normal weight'
    } else if (bmi < 30) {
        classification = 'overweight'
    } else {
        classification = 'obese'
    }

    // Render the results page and pass data to the template.
    // In results.hbs 
    // {{bmi}} and {{classification}}

    res.render('results', { bmi, classification })
})

// Export the router so server.js

module.exports = router