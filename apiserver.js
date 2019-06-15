// server.js
const Hapi = require("hapi");

const server = Hapi.Server({
  host: "localhost",
  port: 3000
});

const emitter = require('events').EventEmitter;

const apiServer = {
  // Get the framework for hapi.js
  em: new emitter(),

  // Create an init method to start the server.
  init: async function() {
    try {
      await server.start();
      this.em.emit('serverStarted','Server is started');
      // set up event handler for shutdown.
      this.em.on('serverShutdown', () => { this.shutdown() });
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  },
  shutdown: function() {
    server.stop({ timeout: 1000 }).then(function (err) {
      process.exit((err) ? 1 : 0)
    })


  }


};

require("./routes/routes")(server);

// Set up the routes and logic.
// apiServer.init();

module.exports = apiServer;
