// server.js
const Hapi = require("hapi");

const server = Hapi.Server({
  host: "localhost",
  port: 3000
});

const apiServer = {
  // Get the framework for hapi.js

  // Create an init method to start the server.
  init: async function() {
    try {
      server.start();
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("Server up and running.");
  }
};
require("./routes/routes")(server);

// Set up the routes and logic.
apiServer.init();

module.exports = apiServer;
