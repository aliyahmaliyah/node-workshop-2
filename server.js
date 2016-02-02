var http = require('http');
var server = http.createServer(function greeting(request, response){
    response.end('hello world');
});
server.listen(process.env.PORT); 