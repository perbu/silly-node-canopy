var supertest = require("supertest");
var should = require("should");

var target = supertest.agent("http://localhost:3000");

var server = require('../apiserver');


describe('Tests', function() {
  before('Set up a server', function(done) {
    // runs before all tests in this block
    server.init();
    server.em.on("serverStarted", function(){
      done();
    }); 
  });

  after('Shut down the server', function() {
    // runs after all tests in this block
    console.log("Shutting down...");
    server.shutdown();
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases


// UNIT test begin

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
