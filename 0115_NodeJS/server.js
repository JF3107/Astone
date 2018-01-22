var http = require('http');
var url = require('url');

function start(route, handle) {//server（服务器）函数需参：①路由函数 ②处理函数 >> 路由函 套 处理函
    http.createServer(function(request,response){
        console.log(request.method);
        var postData = "";
        /**
         * request.url已经是'/upload'的字符串了; 
         * url.parse(request.url)倒是格式化成对象字符串了（其中有一个key是pathname）
         */
        var pathname = url.parse(request.url).pathname;
        // var content = route(handle, pathname);
        request.setEncoding("utf8");//就是“全小写加数字” >> utf8
        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("received datachunk >>" + postDataChunk);
        });
        request.addListener("end", function(){
            route(handle, pathname, response, postData);
        });

        // 1.21,移除 createServer中有关response的函数，这些事情改由"route()"来完成
        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write(content);
        // response.write("Hello World");
        // response.end();
    }).listen(8888);

    console.log("Server has started");
}

exports.start = start; //exports!! 而非 export