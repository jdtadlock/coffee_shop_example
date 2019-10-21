const mongoose = require('mongoose'); // Makes using mongodb easier - ORM
const express = require('express');
const backendRoutes = require('./routes/backend_routes');
// process.env.PORT is used on Heroku to dynamically set the port number
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/review_sesh', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



const app = express(); // Express App - Server

backendRoutes(app);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});