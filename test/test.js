/* eslint-disable no-undef */
const supertest = require('supertest');
// eslint-disable-next-line no-unused-vars
const should = require('should');

const target = supertest.agent('http://localhost:3000');

const serverClass = require('../apiserver');

let server = new serverClass;



describe('Tests', function() {
  before('Set up a server', function(done) {
    // runs before all tests in this block
    server.startup();
    server.em.on("serverStarted", function(){
      done();
    }); 
  });

  after('Shut down the server', function() {
    // runs after all tests in this block
    server.em.emit('serverShutdown', 'Requesting shutdown');
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases


// UNIT test begin

describe("Basic HTTP connection",function(){
  it("should check if the server is answering HTTP requests to / with 404", function(done){
    target
    .get("/")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    })
  });
});

describe("ADD test",function(){

  it("should add two numbers up",function(done){

    // calling home page api
    target
    .get("/calculator/add/2/5")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.body.answer.should.equal(7);
      done();
    });
  });

});


describe("MUL test",function(){

  it("should multiply two numbers up",function(done){

    // calling home page api
    target
    .get("/calculator/multi/8/7")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.body.answer.should.equal(56);
      done();
    });
  });

});


describe("DIV test",function(){

  it("should divide two numbers",function(done){

    // calling home page api
    target
    .get("/calculator/div/64/8")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.body.answer.should.equal(8);
      done();
    });
  });

});



describe("SUB test",function(){

  it("should subtract two numbers",function(done){

    // calling home page api
    target
    .get("/calculator/sub/100/33")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.body.answer.should.equal(67);
      done();
    });
  });

});

});
