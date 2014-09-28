// Load required modules
var http = require('http');

var app = module.exports = express();

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World!!");
});

// Listen on port 5000, IP defaults to 127.0.0.1
server.listen(5000);

// Put a friendly message on the terminal
console.log("Server running on port 5000!");