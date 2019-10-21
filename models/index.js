const mongoose = require('mongoose');

const CoffeeSchema = new mongoose.Schema({
  name: String, // Columbian
  type: String // Dark Roast
});

const Coffee = mongoose.model('Coffee', CoffeeSchema); // An object with a bunch of methods that allow us to do CRUD -- CREATE, READ, UPDATE, DEL

module.exports = Coffee;