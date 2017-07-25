var http = require("http");
var PORT = 7500;

function handleRequest(request, response) {
	response.end("tweet yo");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("Server listening on: https//localhost:%s", PORT);
})