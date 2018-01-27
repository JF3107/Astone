var http = require("http");
var url = require("url");

function start(route, handle){
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname
        route(handle, pathname, response, request);
    }).listen(8888);
    
    console.log("SERVER started!");
}

exports.start = start;