var http = require('http');
var server = http.createServer(function timedGreeting(request, response){
    setTimeout(function(){
        response.end('hello world')
    },10000);
    
});
server.listen(process.env.PORT); 