"use strict";

const serverClass = require('./apiserver');

let server = new serverClass;

server.em.on('serverStarted', () => { console.log("Server reported it is up and running")});
server.em.on('serverShutdown', () => { console.log("Server reported it is shutting down.")});
server.startup();
