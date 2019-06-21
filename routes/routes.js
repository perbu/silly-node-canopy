module.exports = function(server) {
  //About route
  server.get("/calculator/about", function(req, res) {
    res.send("Welcome to our Calculator Service");
  });

  //Add route
  server.get("/calculator/add/:num1/:num2", function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    const data = {
      answer: num1 + num2
    };

    res.send(data);
  });

  //Subtract route
  server.get("/calculator/sub/:num1/:num2", function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    var data = {
      answer: num1 - num2
    };

    res.send(data);
  });

  //Multiply route
  server.get("/calculator/multi/:num1/:num2", function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    var data = {
      answer: num1 * num2
    };

    res.send(data);
  });

  //Division route
  server.get("/calculator/div/:num1/:num2", function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    var data = {
      answer: num1 / num2
    };

    res.send(data);
  });
  /*
    server.route({
        methos: 'GET',
        path: '/dumpstats',
        handler: function(request,h) {

        }

    });

*/
};
