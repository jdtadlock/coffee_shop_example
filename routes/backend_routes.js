const Coffee = require('../models');

module.exports = function (app) {
  // Front should visit a route/url and the backend should
  // be listening to do something in return

  // Route for '/' --- Method is a function of an object
  // localhost:5000/api/test
  app.get('/api/test', function (request, response) {
    response.send('test string');
    // Coffee.find({})
    //   .then(function (coffees) {
    //     // response.render(coffees); // Render references a template engine file(handlebars, pug)

    //     // Show my React homepage!
    //     // React is frontend code - HTML/CSS/JS(Browser)
    //     // Load our main html file from React

    //   });
  });
}

// SELECT * from coffees <<--- SQL
// Mongo <<-- Object Related Database
// { name: 'Starbucks', location: '555 awesome rd.' }