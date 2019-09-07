"use strict";
const axios = require("axios");
const OPERATORS = ["add", "sub", "multi", "div"];

const instance = axios.create({
  baseURL: "http://localhost:3000/calculator/",
  timeout: 1000
});

function printAnswer(answer) {
  console.log("Answer:", answer)
}

function rpcCalc(operator, input1, input2, cb) {
  let answer;
  instance
    .get("/" + operator + "/" + input1 + "/" + input2)
    .then(function(response) {
      // handle success
      //      console.log(response.data);
      cb(response.data);
      // printAnswer(answer);
      //console.log("Answer:", answer);
    })
    .catch(function(error) {
      // handle error
      console.log("ZOMG error:", error);
    });
}

async function calculate(n, cb) {
  for (let i = 0; i < n; i++) {
    let operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
    let input1 = Math.random() * 1000;
    let input2 = Math.random() * 1000;
    rpcCalc(operator, input1, input2, cb);
  }
}
calculate(20, printAnswer);