"use strict";

console.log("Hello");
const serverClass = require("./apiserver");

let server = new serverClass(3000);

server.em.on("serverStarted", (msg) => {
  console.log("Server reported: ", msg);
});
server.em.on("serverShutdown", (msg) => {
  console.log("Server reported:", msg);
}); 
server.startup();

function signalHandle(signal) {
  console.log('Received signal ', signal);
  server.em.emit("serverShutdown", "Shutdown initiated by signal "+signal);
}

process.on('SIGINT', signalHandle);
process.on('SIGTERM', signalHandle);
