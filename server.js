"use strict";

const serverClass = require("./apiserver");

let server = new serverClass();

server.em.on("serverStarted", (msg) => {
  console.log("Server reported: ", msg);
});
server.em.on("serverShutdown", (msg) => {
  console.log("Server reported:", msg);
});
server.startup();
