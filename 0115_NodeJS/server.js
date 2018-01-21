var http = require('http');
var url = require('url');

function start(route, handle) {//server（服务器）函数需参：①路由函数 ②处理函数 >> 路由函 套 处理函
    http.createServer(function(request,response){
        var pathname = url.parse(request.url).pathname;
        var content = route(handle, pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        // response.write("Hello World");
        response.end();
    }).listen(8888);

    console.log("server started");
}

exports.start = start; //exports!! 而非 export