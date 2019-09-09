"use strict";

// server.js
const express = require("express");
const Emitter = require("events").EventEmitter;

class apiServer {
  on(msg) {
    console.log("on:", msg);
  }

  constructor(port) {
    console.log("New apiserver: " + this);
    this.em = new Emitter();
    this.server = express();
    this.port = port;

    require("./routes/routes")(this.server);
    return this;
  }

  // Create an init method to start the server.
  async startup() {
    try {
      // create the server.
      // This line fucks up C8.
      this.runningServer = await this.server.listen(this.port);
      // This too:
      //express().listen(PORT);

      this.em.emit("serverStarted", "Server is started on port " + this.port);

      // set up event handler for shutdown.

      this.em.on("serverShutdown", () => {
        this.shutdown();
      });
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
