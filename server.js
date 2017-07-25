// Import http package (http is a package built in to node js)
var http = require("http");
var PORT = 7000;

var memes = ["My CoDe WoRkS BuT I dOn'T kNoW wHy", "You know nothing, John Snow", "Your friendly neighborhood Spooderman"];

function handleRequest(request, response) {

	// Math.floor((Math.random() * 3) + 0);

	// send reponse
	response.end(memes[Math.floor((Math.random() * 3) + 0)]);
}


// Starting to build the server! Woo hoo!
var server = http.createServer(handleRequest);

// shhh... i'm listening
server.listen(PORT, function() {
	console.log("Server listening on: https://localhost:%s", PORT);
});


var PORTtwo = 7500;

function handleRequestTwo(request, response) {
	response.end("tweet yo");
}

var serverTwo = http.createServer(handleRequestTwo);

serverTwo.listen(PORTtwo, function() {
	console.log("Server listening on: https//localhost:%s", PORT);
})

