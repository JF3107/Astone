var http = require("http");
var url = require("url");

function start(route, handle){
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response, request);
    }).listen(7777);//  6666端口可能被别的进程占了。7000以下都别去玩！

    console.log("SERVER started!!  >>>>");

}

exports.start = start;