// Get the framework for hapi.js
const Hapi = require('hapi');

// Store the hosting server and the port 
const host = 'localhost';
const port = 3000;

// Lets create the server here
const server = Hapi.Server({
    host: host,
    port: port
});

// Create an init method to start the server. 
const init = async () => {

    await server.start();
    console.log("Server up and running at port: " + port);

}

// Call the init method.

require('./routes/routes')(server);

init();

