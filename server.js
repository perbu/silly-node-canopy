"use strict";

const server = require('./apiserver');

server.em.on('serverStarted', () => { console.log("Server reported it is up and running")});
server.em.on('serverShutdown', () => { console.log("Server reported it is shutting down.")});
server.init();
