const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index.js');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(process.env.PORT || 3000, function () {
  console.log(`Server is running on port ${server.address().port}`);
});