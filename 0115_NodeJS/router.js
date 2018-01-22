function route(handle, pathname, response, request){
    console.log("ROUTER!!  route a request for " + pathname);
    if(typeof handle[pathname] === "function"){
        // return handle[pathname]();
        handle[pathname](response, request);
    }else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404,{"content-Type":"text/plain"});
        response.write("404 Not found");
        response.end();
        // return "404 Not found";
    }
}

exports.route = route;