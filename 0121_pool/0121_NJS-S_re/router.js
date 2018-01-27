/** router是分发，分发给requestHandler去处理。
 * route的作用就是配对pathname<==>handler
 */
function route(handle, pathname, response, request){
    if(typeof handle[pathname] === "function"){
        handle[pathname](response, request);
    }else{
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 not found");
        response.end();
    }
}
exports.route = route;