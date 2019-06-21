// server.js
const express = require('express');

const PORT = 3000;
// const HOST = 'localhost';

const Emitter = require('events').EventEmitter;


// TODO: Rewrite as class.

class apiServer {
  // Get the framework for hapi.js
  // let em;
  // let server;
  // let runningServer;

  constructor() {
    console.log("New apiserver: " + this);
    this.em = new Emitter();
    this.server = express();
    // console.log("Created: " +  this.server.listen )
    require('./routes/routes')(this.server);  
    return this;
  }

  // Create an init method to start the server.
  async startup() {
    try {
      // create the server.
      this.runningServer = await this.server.listen(PORT);
      this.em.emit('serverStarted','Server is started');
      // set up event handler for shutdown.
      this.em.on('serverShutdown', () => { this.shutdown() });
     //  this.em.on('dumpStats', () => this.dumpStats() );

    } catch (err) {
      console.warn(err);
      process.exit(1);
    }
  }
  async shutdown() {
    console.log('Shutting down....');
    await this.runningServer.close();
  //     setTimeout( () => { this.server.close() }, 1000 );
  }

};


// Set up the routes and logic.
// apiServer.init();

module.exports = apiServer;
