var http = require("http");
var url = require("url");

function start(route, handle){
    http.createServer(function(request, response){
        //request.url才是 String，url.parse解析了这个String生成一个Object：里面有个属性：pathname
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response, request);
        // response.writeHead(200, {"Content-Type":"text/plain"});
        // response.write(content);
        // response.end();
    }).listen(8888);
    
    console.log("SERVER started >> 8888");
    
}

exports.start = start;