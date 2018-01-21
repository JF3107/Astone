var http = require("http");
var url = require("url");

function start(route, handle){
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        // console.log(pathname);
        var content = route(handle, pathname);
        response.writeHead("200",{"content-Type":"text/plain"});
        response.write(content);
        response.end();
    }).listen(8888);
    
    console.log("server started");
}

exports.start = start;