var http = require("http");
var url = require("url");

function start(route, handle){
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        // console.log(pathname);
        var content = route(handle, pathname);
        response.writeHead(200,{"content-Type":"text/plain"});//200,不应该是“字符串”的！
        response.write(content);
        response.end();
    }).listen(8888);
    
    console.log("server started");
}

exports.start = start;