const express = require('express');
const path = require("path")

const indexRouter = require('./routes/index.js');

const app = express(); //generate express app web app server

app.set('views', path.join(__dirname, 'views')); // where are the views located
app.set('view engine', 'hbs'); // use handlebars as the view engine

console.log("indexRouter type:", typeof indexRouter);
console.log("indexRouter value:", indexRouter);

app.use(express.urlencoded({ extended: false })); // ***** parses HTML form posts into req.body *****
app.use('/', indexRouter); //all requests to the root path will be handled by the indexRouter

const server = app.listen(process.env.PORT || 3000, function(){
    console.log(`Server is running on port ${server.address().port}`);
});