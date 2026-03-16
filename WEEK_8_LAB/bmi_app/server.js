const express = require('express')  // This line is importing the Express 
const path = require('path')  // This line is importing the Path library
const bmiRouter = require('./routes/bmi') // This line is importing the bmiRouter 

const app = express() 
// app.set is configuring the view engine for the app. 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
// app.use is adding Express application
app.use('/', bmiRouter) 

const staticFileLocation = path.join(__dirname, 'public') // static file location for the app.
app.use(express.static(path.join(__dirname, 'public')))  // static files from the public directory.



let server = app.listen(3000, function() { 
    console.log('Server running on port 3000') })