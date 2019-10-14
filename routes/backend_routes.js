module.exports = function (app) {
  // Route for '/' --- Method is a function of an object
  app.get('/', function (request, response) {
    // Send a basic string to the front end
    response.send('this is our new string!'); // send json to the front
    // response.send('some string');
    // response.render(); // Handlebars -- template engine
  });
}