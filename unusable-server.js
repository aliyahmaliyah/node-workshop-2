var http = require('http');
var server = http.createServer(function timedGreeting(request, response){
    var start = new Date().getTime();
  while (new Date().getTime() - start < 10000);
  response.end('hello world');
});
server.listen(process.env.PORT); 