const mongoose = require('mongoose'); // Makes using mongodb easier - ORM
const express = require('express');
const backendRoutes = require('./routes/backend_routes');
// process.env.PORT is used on Heroku to dynamically set the port number
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/review_sesh', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var CoffeeSchema = new mongoose.Schema({
  name: String, // Columbian
  type: String // Dark Roast
});

var Coffee = mongoose.model('Coffee', CoffeeSchema); // An object with a bunch of methods that allow us to do CRUD -- CREATE, READ, UPDATE, DEL
// Coffee.create({
//   name: 'French Roast',
//   type: 'Light'
// }).then(function (result) {
//   console.log(result);
// });

Coffee.find({}).then(function (coffees) {
  console.log(coffees);
}).catch(function (err) {
  console.log(err);
});


const app = express(); // Express App - Server

backendRoutes(app);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});