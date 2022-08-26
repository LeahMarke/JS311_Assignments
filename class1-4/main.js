console.log("Hello");

// bringing in the top level function provided by the express framework
let express = require("express");
// make a web server object, this is creating out application object
let app = express();
// defining a port
let PORT = 8080;
// to give instructions on what to do..."this specifies the route"
// callback function(takes in a request, and a response){}
// for any GET request where the route is "hello", send the string "hello" on the response
// even if you don't need the request, you have to declare it as a parameter
app.get("/hello", function (request, response) {
  response.send("hello");
});
//  we want this app to start to listen for incoming connections, islistening to the port we defined above, and takes a function
//  a function that you pass to another function is a callback function...to pass in instructions, not values
app.listen(PORT, function () {
  console.log("Application started and listening on port", PORT);
});
// this route should return the string of the form
// "hello there:name"
// example: request = /hello/bob, response=hello there bob
app.get("/hello/:name", function (request, response) {
  let value = request.params.name;
  let message = `hello there ${value}`;
  response.send(message);
});

app.get("/bye?name=:x", function (request, response) {
  let value = request.query.name;
  if (request.query.name) {
  }
  let message = `See ya later ${value}!`;
  response.send(message);
});
