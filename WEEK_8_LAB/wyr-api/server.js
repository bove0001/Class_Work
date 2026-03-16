const express = require('express');       // Import Express framework

const indexRouter = require('./routes/index');      // Import routes module

const app = express();    // Create Express app
app.use('/', indexRouter);    // Mount router at root

const server = app.listen(process.env.PORT || 3000, function() { // Start server listening
  console.log(`Server is running on port ${server.address().port}`); // Log active port
});