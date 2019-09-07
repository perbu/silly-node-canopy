"use strict";

// server.js
const express = require("express");

const PORT = 3000;
// const HOST = 'localhost';

const Emitter = require("events").EventEmitter;

class apiServer {
  constructor() {
    console.log("New apiserver: " + this);
    this.em = new Emitter();
    this.server = express();
    // console.log("Created: " +  this.server.listen )
    require("./routes/routes")(this.server);
    return this;
  }

  // Create an init method to start the server.
  async startup() {
    try {
      // create the server.
      this.runningServer = await this.server.listen(PORT);
      this.em.emit("serverStarted", "Server is started on port " + PORT);
      // set up event handler for shutdown.
      this.em.on("serverShutdown", () => {
        this.shutdown();
      });
      //  this.em.on('dumpStats', () => this.dumpStats() );
    } catch (err) {
      console.warn(err);
      process.exit(1);
    }
  }
  async shutdown() {
    console.log("Shutting down....");
    await this.runningServer.close();
  }
}

module.exports = apiServer;
