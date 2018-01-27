var http = require("http");
var url = require("url");

function start(route, handle){
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response, request);
        //监听前、必须先设置：编码，utf8 >> 注意全小写加数字
        // request.setEncoding("utf8");
        // request.addListener("data", function(postDataChunk){
        //     postData += postDataChunk;
        //     console.log("received: >>>>>>>>> "+postData+" >>>>>>>>> ");
        // });
        // request.addListener("end", function(){
        //     console.log("all data received");
        //     route(handle, pathname, response, postData);
        // });
    }).listen(8888);
    
    console.log("server started");
}

exports.start = start;