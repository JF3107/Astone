var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("HELLO WORLD,  JF3107!!");
    response.end();
}).listen(9999);

console.log("the SERVER started");