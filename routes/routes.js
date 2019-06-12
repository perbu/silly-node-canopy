
module.exports = function(server) {
    //About route
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request, h) {
    
            var data = {
                message: 'Welcome to our Calculator Service'
            };
    
            return data;
        }
    });

    //Add route
    server.route({
        method: 'GET',
        path: '/calculator/add/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 + num2
            };
    
            return data;
        }
    });

    //Subtract route
    server.route({
        method: 'GET',
        path: '/calculator/sub/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 - num2
            };
    
            return data;
        }
    });

    //Multiply route
    server.route({
        method: 'GET',
        path: '/calculator/multi/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 * num2
            };
    
            return data;
        }
    });

    //Division route
    server.route({
        method: 'GET',
        path: '/calculator/div/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 / num2
            };
    
            return data;
        }
    });
}
