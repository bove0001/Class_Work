const express = require('express')

const router = express.Router()

router.get('/', function(req, res) {
    res.render('home')
})

router.get('/calculate', function(req, res) {
    
    const formData = req.query
    console.log(formData)
    const height = parseFloat(formData.height)
    const weight = parseFloat(formData.weight)
    const bmi = weight / (height * height)
    let classification = 'fat'
    if (bmi < 18.5) {
        classification = 'underweight'
    } else if (bmi < 25) {
        classification = 'normal weight'
    } else if (bmi < 30) {
        classification = 'overweight'
    } else {
        classification = 'obese'
    }   
    
    // Validate the input data
    // if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    //     return res.status(400).send('Invalid input. Please enter positive numbers for height and weight.')
    // }   

    res.render('results', { bmi, classification })
})




// TODO
module.exports = router