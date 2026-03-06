const express = require('express') 
const path = require('path') 
const bmiRouter = require('./routes/bmi') 

const app = express() 
// app.set is configuring the view engine for our app. It is telling Express to use the Handlebars (hbs) view engine and to look for views in the 'views' directory.
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
// app.use is adding middleware to our Express application. In this case, we are telling Express to use the bmiRouter for any routes that start with '/'.
app.use('/', bmiRouter) 

// TODO set up HBS 

let server = app.listen(3000, function() { 
    console.log('Server running on port 3000') })